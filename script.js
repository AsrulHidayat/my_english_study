// --- CONFIG & DATA ---
// Data Kosakata (Level 1)
const gameData = [
    {en: "I", id: "saya"},
    {en: "You", id: "kamu"},
    {en: "We", id: "kita"},
    {en: "They", id: "mereka"},
    {en: "Go", id: "pergi"},
    {en: "Come", id: "datang"},
    {en: "Want", id: "ingin"},
    {en: "Need", id: "butuh"},
    {en: "Have", id: "punya"},
    {en: "Like", id: "suka"},
];

// Audio (Pastikan path ini sesuai dengan file yang Anda upload)
const audioTrue = new Audio("assets/true.mp3");
const audioWrong = new Audio("assets/wrong.mp3");

// State Game
let currentUser = {
    name: "",
    avatar: "🥷",
    score: 0,
    highScore: 0
};
let currentQuestionIndex = 0;
let hp = 100;
let isGameActive = false;

// --- DOM ELEMENTS ---
const screens = document.querySelectorAll('.screen');
const usernameInput = document.getElementById('username-input');
const avatarOptions = document.querySelectorAll('.avatar-option');
const displayAvatar = document.getElementById('display-avatar');
const displayUsername = document.getElementById('display-username');
const displayLevel = document.getElementById('display-level');
const questionWord = document.getElementById('question-word');
const answerInput = document.getElementById('answer-input');
const hpFill = document.getElementById('hp-fill');
const currentScoreDisplay = document.getElementById('current-score');
const feedbackMsg = document.getElementById('feedback-msg');
const leaderboardList = document.getElementById('leaderboard-list');

// --- NAVIGASI SCREEN ---
function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// --- SYSTEM LOGIN ---
// Pilih Avatar
avatarOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        avatarOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        currentUser.avatar = opt.dataset.avatar;
    });
});

function login() {
    const name = usernameInput.value.trim();
    if (!name) return alert("Harap masukkan nama pahlawan!");
    
    currentUser.name = name;
    
    // Cek data lama di LocalStorage
    const savedData = JSON.parse(localStorage.getItem('english_legends_' + name));
    if (savedData) {
        currentUser.highScore = savedData.highScore || 0;
        alert(`Selamat datang kembali, ${name}! Skor Tertinggimu: ${currentUser.highScore}`);
    }

    updateDashboard();
    showScreen('dashboard-screen');
}

function logout() {
    currentUser = { name: "", avatar: "🥷", score: 0, highScore: 0 };
    usernameInput.value = "";
    showScreen('login-screen');
}

function updateDashboard() {
    displayUsername.textContent = currentUser.name;
    displayAvatar.textContent = currentUser.avatar;
    displayLevel.textContent = "Rank: Novice"; // Bisa dikembangkan nanti
}

// --- GAMEPLAY (STORY MODE) ---
function startStoryMode() {
    currentQuestionIndex = 0;
    hp = 100;
    currentUser.score = 0;
    isGameActive = true;
    
    // Shuffle Pertanyaan (Acak urutan)
    gameData.sort(() => Math.random() - 0.5);
    
    updateGameUI();
    loadQuestion();
    showScreen('game-screen');
    
    // Fokus ke input setelah layar berganti
    setTimeout(() => answerInput.focus(), 500);
}

function updateGameUI() {
    hpFill.style.width = hp + "%";
    currentScoreDisplay.textContent = currentUser.score;
    if (hp < 30) hpFill.style.backgroundColor = "#ff0055";
    else hpFill.style.backgroundColor = "#00ff88";
}

function loadQuestion() {
    if (currentQuestionIndex >= gameData.length) {
        endGame(true); // Menang semua soal
        return;
    }
    
    const word = gameData[currentQuestionIndex];
    questionWord.textContent = word.en;
    answerInput.value = "";
    feedbackMsg.textContent = "";
    answerInput.focus();
}

// Event Listener untuk tombol Enter
answerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitAnswer();
    }
});

function submitAnswer() {
    if (!isGameActive) return;

    const answer = answerInput.value.trim().toLowerCase();
    const correct = gameData[currentQuestionIndex].id.toLowerCase();

    if (answer === correct) {
        // BENAR
        audioTrue.currentTime = 0;
        audioTrue.play();
        currentUser.score += 10;
        feedbackMsg.textContent = "Sempurna! +10 Poin";
        feedbackMsg.className = "correct";
        
        // Animasi musuh kena hit (opsional)
        document.querySelector('.enemy-avatar').classList.add('shake');
        setTimeout(()=> document.querySelector('.enemy-avatar').classList.remove('shake'), 500);

        currentQuestionIndex++;
        setTimeout(loadQuestion, 1000); // Jeda 1 detik sebelum soal berikutnya

    } else {
        // SALAH
        audioWrong.currentTime = 0;
        audioWrong.play();
        hp -= 20; // Kurangi Darah
        feedbackMsg.textContent = `Salah! Jawaban: ${correct}`;
        feedbackMsg.className = "wrong";
        
        // Animasi layar getar
        document.getElementById('game-screen').classList.add('shake');
        setTimeout(()=> document.getElementById('game-screen').classList.remove('shake'), 500);

        if (hp <= 0) {
            setTimeout(() => endGame(false), 1000);
        } else {
            // Tetap lanjut ke soal berikutnya atau ulang? 
            // Di mode cerita ini, kita lanjut saja tapi darah berkurang.
            currentQuestionIndex++;
            setTimeout(loadQuestion, 1500);
        }
    }
    updateGameUI();
}

function endGame(isWin) {
    isGameActive = false;
    if (isWin) {
        alert(`Misi Selesai! Skor Akhir: ${currentUser.score}`);
    } else {
        alert("Kamu Kehabisan Tenaga! Game Over.");
    }
    
    saveScore();
    showScreen('dashboard-screen');
}

function quitGame() {
    if(confirm("Yakin ingin menyerah? Progress tidak akan disimpan.")) {
        showScreen('dashboard-screen');
    }
}

// --- LEADERBOARD SYSTEM ---
function saveScore() {
    // Update highscore user saat ini
    if (currentUser.score > currentUser.highScore) {
        currentUser.highScore = currentUser.score;
    }

    // Simpan data personal
    const userData = { highScore: currentUser.highScore };
    localStorage.setItem('english_legends_' + currentUser.name, JSON.stringify(userData));

    // Simpan ke Global Leaderboard (Simulasi Array)
    let leaderboard = JSON.parse(localStorage.getItem('global_leaderboard')) || [];
    
    // Cek apakah user sudah ada di leaderboard, update jika skor lebih tinggi
    const existingUserIndex = leaderboard.findIndex(u => u.name === currentUser.name);
    if (existingUserIndex > -1) {
        if (currentUser.score > leaderboard[existingUserIndex].score) {
            leaderboard[existingUserIndex].score = currentUser.score;
            leaderboard[existingUserIndex].avatar = currentUser.avatar;
        }
    } else {
        leaderboard.push({
            name: currentUser.name,
            score: currentUser.score,
            avatar: currentUser.avatar
        });
    }

    // Urutkan dan ambil Top 5
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);

    localStorage.setItem('global_leaderboard', JSON.stringify(leaderboard));
}

function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('global_leaderboard')) || [];
    leaderboardList.innerHTML = "";
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = "<li style='text-align:center'>Belum ada data pahlawan.</li>";
    } else {
        leaderboard.forEach((player, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>#${index + 1} ${player.avatar} <b>${player.name}</b></span>
                <span style="color:var(--primary)">${player.score} pts</span>
            `;
            leaderboardList.appendChild(li);
        });
    }
    
    showScreen('leaderboard-screen');
}

function showDashboard() {
    showScreen('dashboard-screen');
}