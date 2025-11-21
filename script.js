// Data Kosakata Hari 1
let words = [
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

// Load Audio
let trueSound = new Audio("assets/sounds/true.mp3");
let wrongSound = new Audio("assets/sounds/wrong.mp3");

// Ambil elemen container
let container = document.getElementById("game-container");

// Tampilkan kartu untuk setiap kosakata
words.forEach((w) => {
    let card = document.createElement("div");
    card.className = "card";
    card.textContent = w.en;
    card.onclick = () => checkAnswer(w);
    container.appendChild(card);
});

// Fungsi untuk memeriksa jawaban user
function checkAnswer(word) {
    let answer = prompt("What is the meaning of: " + word.en + "?");

    // Jika user klik Cancel atau kosong
    if (!answer) return;

    if (answer.toLowerCase() === word.id.toLowerCase()) {
        trueSound.currentTime = 0;
        trueSound.play();
        alert("Correct!");

        // Simpan progres hanya jika benar
        localStorage.setItem("day1-progress", "completed");

    } else {
        wrongSound.currentTime = 0;
        wrongSound.play();
        alert("Wrong! Correct answer: " + word.id);
    }
}

// Cek progres saat membuka halaman
window.onload = () => {
    if (localStorage.getItem("day1-progress")) {
        console.log("Progress Loaded.");
        alert("Welcome back! Day 1 previously completed.");
    }
};
