// --- LOGIC HALAMAN DASHBOARD ---
function showDashboard() {
    updateDashUI();
    switchScreen('dashboard-screen');
}

function updateDashUI() {
    document.getElementById('display-username').textContent = state.user;
    document.getElementById('display-avatar').textContent = state.avatar;
    document.getElementById('display-highscore').textContent = state.highScore;
}
