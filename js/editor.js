// js/editor.js

let tempVocabList = [];
let editingLevelIndex = null; // null = Mode Buat Baru, Angka = Mode Edit

// --- NAVIGASI ---
function showLevelSelect() {
    renderLevelList();
    switchScreen('level-screen');
}

// Fungsi Buka Editor (Mode Baru)
function openEditor() {
    editingLevelIndex = null; // Reset ke mode "Buat Baru"

    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];
    const nextDay = userLevels.length + 1;

    document.getElementById('day-label').textContent = `CREATE MISSION: DAY ${nextDay}`;

    // Reset Form
    tempVocabList = [];
    updatePreviewList();
    document.getElementById('input-bulk').value = "";

    switchScreen('editor-screen');
}

// Fungsi Buka Editor (Mode Edit)
function editLevel(index) {
    editingLevelIndex = index; // Set ke mode "Edit"

    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];
    const targetLevel = userLevels[index];

    document.getElementById('day-label').textContent = `EDITING: DAY ${targetLevel.day}`;

    // Load kata-kata yang sudah ada
    tempVocabList = [...targetLevel.words];
    updatePreviewList();

    // Kosongkan textarea (opsional, user bisa tambah kata baru lewat sini)
    document.getElementById('input-bulk').value = "";

    switchScreen('editor-screen');
}

// Fungsi Hapus Level
function deleteLevel(index) {
    if (!confirm("Yakin ingin menghapus misi hari ini? Data skor juga akan hilang.")) return;

    let userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];

    // Hapus dari array
    userLevels.splice(index, 1);

    // Urutkan ulang nomor "Day" (Hari) agar tidak loncat (misal 1, 3 jadi 1, 2)
    userLevels.forEach((lvl, i) => {
        lvl.day = i + 1;
    });

    localStorage.setItem('my_levels_' + state.user, JSON.stringify(userLevels));
    renderLevelList(); // Refresh tampilan
}

// --- LOGIKA BULK IMPORT ---
function processBulkInput() {
    const raw = document.getElementById('input-bulk').value;
    if (!raw.trim()) return alert("Tempel kata-katanya dulu di kotak!");

    const lines = raw.split('\n');
    let count = 0;

    lines.forEach(line => {
        if (!line.trim()) return;
        const parts = line.split(/[\—\-\:\=]/); // Deteksi pemisah

        if (parts.length >= 2) {
            const en = parts[0].trim();
            const id = parts.slice(1).join(' ').trim();

            if (en && id) {
                tempVocabList.push({ en: en, id: id });
                count++;
            }
        }
    });

    if (count > 0) {
        document.getElementById('input-bulk').value = "";
        updatePreviewList();
    } else {
        alert("Format tidak dikenali! Gunakan: Inggris - Indonesia");
    }
}

function updatePreviewList() {
    const list = document.getElementById('preview-list');
    list.innerHTML = "";

    if (tempVocabList.length === 0) {
        list.innerHTML = "<li style='color:#666; text-align:center; padding:10px;'>List kosong...</li>";
        return;
    }

    tempVocabList.forEach((item, index) => {
        list.innerHTML += `
            <li class="preview-item">
                <span><b>${item.en}</b> = ${item.id}</span>
                <button onclick="removeWord(${index})" class="delete-btn">×</button>
            </li>
        `;
    });
    list.scrollTop = list.scrollHeight;
}

function removeWord(index) {
    tempVocabList.splice(index, 1);
    updatePreviewList();
}

// --- SIMPAN DATA (BARU / EDIT) ---
function saveLevel() {
    if (tempVocabList.length < 1) return alert("Misi kosong! Tambahkan minimal 1 kata.");

    let userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];

    if (editingLevelIndex !== null) {
        // --- LOGIKA UPDATE (EDIT) ---
        userLevels[editingLevelIndex].words = tempVocabList;
        // Kita tidak mereset skor (bestScore) agar progress user terjaga, 
        // atau Anda bisa meresetnya jika mau: userLevels[editingLevelIndex].bestScore = 0;

        alert(`Perubahan pada Hari ke-${userLevels[editingLevelIndex].day} disimpan!`);
    } else {
        // --- LOGIKA CREATE (BARU) ---
        const newLevel = {
            day: userLevels.length + 1,
            words: tempVocabList,
            bestScore: 0
        };
        userLevels.push(newLevel);
        alert(`Misi Hari ke-${newLevel.day} Berhasil Dibuat!`);
    }

    localStorage.setItem('my_levels_' + state.user, JSON.stringify(userLevels));

    // Kembali ke menu pilih level
    showLevelSelect();
}

// --- RENDER LEVEL LIST (DENGAN TOMBOL EDIT & DELETE) ---
function renderLevelList() {
    const list = document.getElementById('level-list');
    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];

    list.innerHTML = "";

    if (userLevels.length === 0) {
        list.innerHTML = "<p style='text-align:center; color:#666; margin-top:20px;'>Belum ada misi. Buat sendiri yuk!</p>";
    } else {
        userLevels.forEach((lvl, index) => {
            list.innerHTML += `
                <div class="level-item" style="cursor: default;">
                    <div onclick="playCustomLevel(${index})" style="flex-grow:1; cursor:pointer;">
                        <strong style="color:white;">DAY ${lvl.day}</strong>
                        <div style="font-size:0.8rem; color:#aaa;">${lvl.words.length} Words | Best: <span style="color:#ffd700">${lvl.bestScore || 0}</span></div>
                    </div>
                    
                    <div class="level-actions">
                        <button onclick="playCustomLevel(${index})" class="action-btn btn-play-mini" style="border-color:var(--primary); color:var(--primary);">▶</button>
                        <button onclick="editLevel(${index})" class="action-btn btn-edit">✏️</button>
                        <button onclick="deleteLevel(${index})" class="action-btn btn-delete">🗑️</button>
                    </div>
                </div>
            `;
        });
    }
}

// Fungsi Main
function playCustomLevel(index) {
    const userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user));
    const selectedLevel = userLevels[index];

    state.currentLevelIndex = index;
    state.isCustomGame = true;

    startStoryMode(selectedLevel.words);
}