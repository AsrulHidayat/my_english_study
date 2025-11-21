// --- LOGIC HALAMAN LEADERBOARD ---
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