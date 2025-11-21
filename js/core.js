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

// Game State Global
let state = {
    user: "Guest", avatar: "🧑‍🚀", score: 0, highScore: 0, 
    hp: 100, active: false, qIndex: 0
};

// --- NAVIGATION SYSTEM ---
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 50);
}

// --- UTILS: CONFETTI ---
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    
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