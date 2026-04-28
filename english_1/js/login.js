// --- LOGIC HALAMAN LOGIN ---
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
    
    // Load data dari LocalStorage
    const saved = JSON.parse(localStorage.getItem('space_vocab_' + name));
    if(saved) state.highScore = saved.highScore || 0;

    // Pindah ke Dashboard (fungsi ada di dashboard.js)
    showDashboard();
}

function logout() {
    document.getElementById('username-input').value = "";
    switchScreen('login-screen');
}