// js/game.js

// --- LOGIC HALAMAN GAME (BATTLE) ---

// Terima parameter 'customData' (opsional) untuk Level Harian
function startStoryMode(customData = null) {
    state.score = 0;
    state.hp = 100;
    state.qIndex = 0;
    state.active = true;
    
    // Cek apakah ini game custom (kosa kata sendiri) atau story mode biasa
    if (customData) {
        state.currentVocabList = [...customData]; // Gunakan data custom
        // Note: state.isCustomGame diset di editor.js sebelum memanggil fungsi ini
    } else {
        state.currentVocabList = [...vocabData]; // Gunakan data bawaan
        state.isCustomGame = false;
    }
    
    // Acak soal dari list yang sedang aktif
    state.currentVocabList.sort(() => Math.random() - 0.5);
    
    updateGameUI();
    nextQuestion();
    switchScreen('game-screen');
    setTimeout(() => document.getElementById('answer-input').focus(), 500);
}

function updateGameUI() {
    document.getElementById('current-score').textContent = state.score;
    const hpBar = document.getElementById('hp-fill');
    hpBar.style.width = state.hp + "%";
    hpBar.style.backgroundColor = state.hp < 30 ? "#ff4757" : "#00ff41";
}

function nextQuestion() {
    // Gunakan state.currentVocabList, BUKAN vocabData langsung
    if(state.qIndex >= state.currentVocabList.length) return finishGame(true);
    
    const word = state.currentVocabList[state.qIndex];
    const card = document.querySelector('.question-card-pop');
    
    // Reset Animasi Kartu
    card.style.animation = 'none';
    card.offsetHeight; /* Trigger reflow */
    card.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    document.getElementById('question-word').textContent = word.en;
    document.getElementById('answer-input').value = "";
    document.getElementById('feedback-area').innerHTML = "";
    document.getElementById('answer-input').focus();
}

// Event Listener Enter
document.getElementById('answer-input').addEventListener("keypress", (e) => {
    if(e.key === "Enter") submitAnswer();
});

function submitAnswer() {
    if(!state.active) return;
    
    const input = document.getElementById('answer-input');
    const answer = input.value.trim().toLowerCase();
    
    // Cek jawaban dari list yang aktif
    const correct = state.currentVocabList[state.qIndex].id.toLowerCase();
    const feedback = document.getElementById('feedback-area');

    if(answer === correct) {
        // BENAR
        sfxWin.currentTime = 0; sfxWin.play();
        state.score += 10;
        feedback.innerHTML = "<span class='msg-correct'>✨ TEPAT SEKALI!</span>";
        fireConfetti();
        state.qIndex++;
        setTimeout(nextQuestion, 1000);
    } else {
        // SALAH
        sfxLose.currentTime = 0; sfxLose.play();
        state.hp -= 20;
        feedback.innerHTML = `<span class='msg-wrong'>❌ SALAH! Jawabannya: ${correct}</span>`;
        
        document.querySelector('.game-panel').classList.add('shake-anim');
        setTimeout(()=> document.querySelector('.game-panel').classList.remove('shake-anim'), 500);

        if(state.hp <= 0) setTimeout(() => finishGame(false), 1000);
        else {
            state.qIndex++;
            setTimeout(nextQuestion, 1500);
        }
    }
    updateGameUI();
}

function finishGame(win) {
    state.active = false;
    const msg = win ? "MISI SUKSES! Semua kata terjawab." : "MISI GAGAL! Pesawat rusak.";
    alert(`${msg}\nSkor Akhir: ${state.score}`);
    
    // --- LOGIKA SIMPAN SKOR ---
    
    // A. Jika Mode Custom (Misi Harian)
    if (state.isCustomGame && typeof state.currentLevelIndex !== 'undefined') {
        let userLevels = JSON.parse(localStorage.getItem('my_levels_' + state.user)) || [];
        
        // Cek apakah skor baru lebih tinggi dari bestScore level ini
        if (state.score > (userLevels[state.currentLevelIndex].bestScore || 0)) {
            userLevels[state.currentLevelIndex].bestScore = state.score;
            localStorage.setItem('my_levels_' + state.user, JSON.stringify(userLevels));
            alert("🎉 Rekor Baru untuk Misi Hari ini!");
        }
        
        // Kembali ke layar Pilih Level (pastikan editor.js sudah diload)
        if(typeof showLevelSelect === 'function') {
            showLevelSelect();
        } else {
            showDashboard();
        }

    } else {
        // B. Jika Mode Biasa (Global Leaderboard)
        
        // Simpan Highscore Personal
        if(state.score > state.highScore) {
            state.highScore = state.score;
            localStorage.setItem('space_vocab_' + state.user, JSON.stringify({highScore: state.highScore}));
        }
        
        // Simpan ke Global Leaderboard
        let lb = JSON.parse(localStorage.getItem('global_lb')) || [];
        let existing = lb.find(p => p.name === state.user);
        if(existing) {
            if(state.score > existing.score) existing.score = state.score;
            existing.avatar = state.avatar;
        } else {
            lb.push({name: state.user, score: state.score, avatar: state.avatar});
        }
        
        lb.sort((a,b) => b.score - a.score);
        localStorage.setItem('global_lb', JSON.stringify(lb.slice(0, 5)));
        
        showDashboard();
    }
}

function quitGame() {
    if(confirm("Batalkan misi dan kembali ke markas?")) {
        state.active = false;
        // Kembali ke layar yang sesuai
        if(state.isCustomGame && typeof showLevelSelect === 'function') {
            showLevelSelect();
        } else {
            showDashboard();
        }
    }
}