// --- DATA & CONFIG ---
const vocabData = [
    {en: "Run", id: "lari"}, {en: "Walk", id: "jalan"},
    {en: "Eat", id: "makan"}, {en: "Drink", id: "minum"},
    {en: "Sleep", id: "tidur"}, {en: "Jump", id: "lompat"},
    {en: "Swim", id: "renang"}, {en: "Fly", id: "terbang"},
    {en: "Read", id: "baca"}, {en: "Write", id: "tulis"},
    {en: "Sing", id: "nyanyi"}, {en: "Dance", id: "tari"}
];

// Sounds
const sfxWin = document.getElementById('sfx-win');
const sfxLose = document.getElementById('sfx-lose');

// Game State
let state = {
    user: "Guest", avatar: "🧑‍🚀", score: 0, highScore: 0, 
    hp: 100, active: false, qIndex: 0
};

// --- UI NAVIGATION ---
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    // Sedikit delay agar transisi CSS terlihat smooth
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 50);
}

// Fungsi yang sebelumnya hilang!
function showDashboard() {
    updateDashUI(); // Update data terbaru (skor/nama) sebelum masuk
    switchScreen('dashboard-screen');
}

// --- LOGIN LOGIC ---
document.querySelectorAll('.avatar-opt').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.avatar-opt').forEach(a => a.classList.remove('selected'));
        el.classList.add('selected');
        state.avatar = el.dataset.avatar;
    });
});

function login() {
    const name = document.getElementById('username-input').value.trim();
    if(!name) return alert("Harap isi nama Kapten!");
    
    state.user = name;
    
    // Load Progress dari LocalStorage
    const saved = JSON.parse(localStorage.getItem('space_vocab_' + name));
    if(saved) state.highScore = saved.highScore || 0;

    showDashboard(); // Gunakan fungsi yang sudah diperbaiki
}

function logout() {
    document.getElementById('username-input').value = "";
    switchScreen('login-screen');
}

function updateDashUI() {
    document.getElementById('display-username').textContent = state.user;
    document.getElementById('display-avatar').textContent = state.avatar;
    document.getElementById('display-highscore').textContent = state.highScore;
}

// --- GAME ENGINE ---
function startStoryMode() {
    state.score = 0;
    state.hp = 100;
    state.qIndex = 0;
    state.active = true;
    
    // Shuffle (Acak) Soal
    vocabData.sort(() => Math.random() - 0.5);
    
    updateGameUI();
    nextQuestion();
    switchScreen('game-screen');
    setTimeout(() => document.getElementById('answer-input').focus(), 500);
}

function updateGameUI() {
    document.getElementById('current-score').textContent = state.score;
    const hpBar = document.getElementById('hp-fill');
    hpBar.style.width = state.hp + "%";
    
    // Warna HP: Hijau jika aman, Merah jika kritis
    hpBar.style.backgroundColor = state.hp < 30 ? "#ff4757" : "#00b09b";
}

function nextQuestion() {
    // Cek apakah soal sudah habis
    if(state.qIndex >= vocabData.length) return finishGame(true);
    
    const word = vocabData[state.qIndex];
    const card = document.querySelector('.question-card-pop');
    
    // Reset Animasi Kartu agar efek 'Pop' muncul setiap ganti soal
    card.style.animation = 'none';
    card.offsetHeight; /* Trigger reflow CSS */
    card.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    document.getElementById('question-word').textContent = word.en;
    document.getElementById('answer-input').value = "";
    document.getElementById('feedback-area').innerHTML = "";
    document.getElementById('answer-input').focus();
}

// Handle Enter Key pada Input
document.getElementById('answer-input').addEventListener("keypress", (e) => {
    if(e.key === "Enter") submitAnswer();
});

function submitAnswer() {
    if(!state.active) return;
    
    const input = document.getElementById('answer-input');
    const answer = input.value.trim().toLowerCase();
    const correct = vocabData[state.qIndex].id.toLowerCase();
    const feedback = document.getElementById('feedback-area');

    if(answer === correct) {
        // JAWABAN BENAR
        sfxWin.currentTime = 0; sfxWin.play();
        state.score += 10;
        feedback.innerHTML = "<span class='msg-correct'>✨ TEPAT SEKALI!</span>";
        fireConfetti(); // Efek Kembang Api
        state.qIndex++;
        setTimeout(nextQuestion, 1000); // Jeda 1 detik
    } else {
        // JAWABAN SALAH
        sfxLose.currentTime = 0; sfxLose.play();
        state.hp -= 20;
        feedback.innerHTML = `<span class='msg-wrong'>❌ SALAH! Jawabannya: ${correct}</span>`;
        
        // Efek Getar Layar
        document.querySelector('.game-panel').classList.add('shake-anim');
        setTimeout(()=> document.querySelector('.game-panel').classList.remove('shake-anim'), 500);

        if(state.hp <= 0) setTimeout(() => finishGame(false), 1000);
        else {
            state.qIndex++; // Lanjut soal berikutnya meski salah
            setTimeout(nextQuestion, 1500);
        }
    }
    updateGameUI();
}

function finishGame(win) {
    state.active = false;
    const msg = win ? "MISI SUKSES! Semua kata terjawab." : "MISI GAGAL! Pesawat rusak.";
    alert(`${msg}\nSkor Akhir: ${state.score}`);
    
    // Simpan High Score Pribadi
    if(state.score > state.highScore) {
        state.highScore = state.score;
        localStorage.setItem('space_vocab_' + state.user, JSON.stringify({highScore: state.highScore}));
    }
    
    // Simpan ke Global Leaderboard (Sederhana)
    let lb = JSON.parse(localStorage.getItem('global_lb')) || [];
    // Cek jika user sudah ada, update skor jika lebih tinggi
    let existing = lb.find(p => p.name === state.user);
    if(existing) {
        if(state.score > existing.score) existing.score = state.score;
        existing.avatar = state.avatar;
    } else {
        lb.push({name: state.user, score: state.score, avatar: state.avatar});
    }
    
    // Urutkan dari terbesar ke terkecil
    lb.sort((a,b) => b.score - a.score);
    // Ambil Top 5 saja
    localStorage.setItem('global_lb', JSON.stringify(lb.slice(0, 5)));
    
    showDashboard();
}

function quitGame() {
    if(confirm("Batalkan misi dan kembali ke markas?")) {
        state.active = false;
        showDashboard();
    }
}

// --- LEADERBOARD DISPLAY ---
function showLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    const lb = JSON.parse(localStorage.getItem('global_lb')) || [];
    list.innerHTML = "";
    
    if(lb.length === 0) {
        list.innerHTML = "<li style='justify-content:center; opacity:0.5;'>Belum ada data.</li>";
    } else {
        lb.forEach((p, i) => {
            // Tambahkan Crown 👑 untuk juara 1
            let rankIcon = i === 0 ? "👑" : `#${i+1}`;
            list.innerHTML += `
                <li>
                    <span>${rankIcon} ${p.avatar} <strong>${p.name}</strong></span> 
                    <span style="color:#ffd700; font-weight:bold;">${p.score} pts</span>
                </li>`;
        });
    }
    switchScreen('leaderboard-screen');
}

// --- EFEK PARTIKEL (CONFETTI) ---
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    
    let particles = Array.from({length: 40}, () => ({
        x: window.innerWidth/2, 
        y: window.innerHeight/2,
        vx: (Math.random()-0.5)*15, 
        vy: (Math.random()-0.5)*15,
        color: `hsl(${Math.random()*360}, 100%, 60%)`, 
        life: 60,
        size: Math.random() * 5 + 2
    }));
    
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx; 
            p.y += p.vy; 
            p.life--;
            p.vy += 0.5; // Gravitasi
            ctx.fillStyle = p.color; 
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
            ctx.fill();
            if(p.life<=0) particles.splice(i,1);
        });
        if(particles.length) requestAnimationFrame(draw);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    draw();
}