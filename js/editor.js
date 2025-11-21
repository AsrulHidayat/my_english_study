// js/editor.js

let tempVocabList = [];

// --- NAVIGASI ---
function showLevelSelect() {
    renderLevelList();
    switchScreen('level-screen');
}

function openEditor() {
    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];
    const nextDay = userLevels.length + 1;
    
    document.getElementById('day-label').textContent = `MISSION: DAY ${nextDay}`;
    
    // Reset Editor
    tempVocabList = [];
    updatePreviewList();
    document.getElementById('input-bulk').value = "";
    
    switchScreen('editor-screen');
}

// --- LOGIKA BULK IMPORT (INTI FITUR) ---
function processBulkInput() {
    const raw = document.getElementById('input-bulk').value;
    if (!raw.trim()) return alert("Tempel kata-katanya dulu di kotak!");

    const lines = raw.split('\n'); // Pisahkan per baris
    let count = 0;

    lines.forEach(line => {
        if (!line.trim()) return; // Lewati baris kosong

        // Regex Ajaib: Memisahkan berdasarkan tanda sambung (—, -, :, =)
        // Bagian kiri masuk array[0], kanan masuk array[1] dsb
        const parts = line.split(/[\—\-\:\=]/);

        if (parts.length >= 2) {
            const en = parts[0].trim();
            // Gabungkan sisanya jika ada lebih dari satu pemisah, jaga-jaga
            const id = parts.slice(1).join(' ').trim();

            if (en && id) {
                // Tambahkan ke list
                tempVocabList.push({ en: en, id: id });
                count++;
            }
        }
    });

    if (count > 0) {
        document.getElementById('input-bulk').value = ""; // Kosongkan form
        updatePreviewList(); // Tampilkan hasilnya
        // Opsional: alert(`Berhasil mendeteksi ${count} kata!`);
    } else {
        alert("Format tidak dikenali! Gunakan format: Inggris - Indonesia");
    }
}

function updatePreviewList() {
    const list = document.getElementById('preview-list');
    list.innerHTML = "";

    tempVocabList.forEach((item, index) => {
        list.innerHTML += `
            <li class="preview-item">
                <span><b>${item.en}</b> = ${item.id}</span>
                <button onclick="removeWord(${index})" class="delete-btn">×</button>
            </li>
        `;
    });
    
    // Auto scroll ke bawah
    list.scrollTop = list.scrollHeight;
}

function removeWord(index) {
    tempVocabList.splice(index, 1);
    updatePreviewList();
}

// --- SIMPAN DATA ---
function saveLevel() {
    if (tempVocabList.length < 1) return alert("Misi kosong! Tambahkan kata dulu.");

    let userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];
    
    const newLevel = {
        day: userLevels.length + 1,
        words: tempVocabList,
        bestScore: 0
    };
    
    userLevels.push(newLevel);
    localStorage.setItem('my_levels_' + state.user, JSON.stringify(userLevels));

    alert(`Misi Hari ke-${newLevel.day} Siap Dimulai!`);
    playCustomLevel(userLevels.length - 1);
}

// --- RENDER LEVEL LIST ---
function renderLevelList() {
    const list = document.getElementById('level-list');
    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];
    
    list.innerHTML = "";

    if (userLevels.length === 0) {
        list.innerHTML = "<p style='text-align:center; color:#666; margin-top:20px;'>Belum ada misi. Buat sendiri yuk!</p>";
    } else {
        userLevels.forEach((lvl, index) => {
            list.innerHTML += `
                <div class="level-item" onclick="playCustomLevel(${index})">
                    <div>
                        <strong style="color:white;">DAY ${lvl.day}</strong>
                        <div style="font-size:0.8rem; color:#aaa;">${lvl.words.length} Words</div>
                    </div>
                    <div style="text-align:right">
                        <div style="color:#ffd700; font-weight:bold;">★ ${lvl.bestScore || 0}</div>
                        <div style="color:var(--primary); font-size:0.7rem; letter-spacing:1px;">PLAY ▶</div>
                    </div>
                </div>
            `;
        });
    }
}

function playCustomLevel(index) {
    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user));
    const selectedLevel = userLevels[index];

    // Set parameter global untuk game.js
    state.currentLevelIndex = index; 
    state.isCustomGame = true;

    // Panggil fungsi dari game.js
    startStoryMode(selectedLevel.words);
}