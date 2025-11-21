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
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 50);
}

function showDashboard() {
    updateDashUI();
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
    
    const saved = JSON.parse(localStorage.getItem('space_vocab_' + name));
    if(saved) state.highScore = saved.highScore || 0;

    showDashboard();
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
    hpBar.style.backgroundColor = state.hp < 30 ? "#ff4757" : "#00ff41";
}

function nextQuestion() {
    if(state.qIndex >= vocabData.length) return finishGame(true);
    
    const word = vocabData[state.qIndex];
    const card = document.querySelector('.question-card-pop');
    
    card.style.animation = 'none';
    card.offsetHeight; /* Trigger reflow CSS */
    card.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    document.getElementById('question-word').textContent = word.en;
    document.getElementById('answer-input').value = "";
    document.getElementById('feedback-area').innerHTML = "";
    document.getElementById('answer-input').focus();
}

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
        sfxWin.currentTime = 0; sfxWin.play();
        state.score += 10;
        feedback.innerHTML = "<span class='msg-correct'>✨ TEPAT SEKALI!</span>";
        fireConfetti();
        state.qIndex++;
        setTimeout(nextQuestion, 1000);
    } else {
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
    
    if(state.score > state.highScore) {
        state.highScore = state.score;
        localStorage.setItem('space_vocab_' + state.user, JSON.stringify({highScore: state.highScore}));
    }
    
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
        list.innerHTML = "<li style='justify-content:center; opacity:0.5; padding: 30px;'>Belum ada data misi.</li>";
    } else {
        lb.forEach((p, i) => {
            let rankIcon;
            if (i === 0) rankIcon = "👑";
            else if (i === 1) rankIcon = "🥈";
            else if (i === 2) rankIcon = "🥉";
            else rankIcon = `#${i+1}`;

            list.innerHTML += `
                <li>
                    <div class="player-info">
                        <span style="min-width: 30px;">${rankIcon}</span>
                        <span style="font-size: 1.5rem;">${p.avatar}</span>
                        <span>${p.name}</span>
                    </div>
                    <div class="player-score">
                        ${p.score} pts
                    </div>
                </li>`;
        });
    }
    switchScreen('leaderboard-screen');
}

// --- EFEK PARTIKEL ---
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    
    let particles = Array.from({length: 40}, () => ({
        x: window.innerWidth/2, y: window.innerHeight/2,
        vx: (Math.random()-0.5)*15, vy: (Math.random()-0.5)*15,
        color: `hsl(${Math.random()*360}, 100%, 60%)`, life: 60, size: Math.random() * 5 + 2
    }));
    
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy; p.life--; p.vy += 0.5;
            ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
            if(p.life<=0) particles.splice(i,1);
        });
        if(particles.length) requestAnimationFrame(draw);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    draw();
}