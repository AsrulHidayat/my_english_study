
// --- GRAMMAR DATA ---
const grammarLevels = [
    {
        id: 1,
        title: "Level 1: Subject + Verb",
        desc: "Kalimat paling sederhana (Pelaku + Aksi).",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Subject + Verb</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Pola kalimat paling dasar dalam bahasa Inggris. Hanya butuh Pelaku (Subject) dan Kata Kerja (Verb).</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">Subject</span> + 
                <span style="color: #00f2fe; font-weight:bold;">Verb</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">Birds</span> 
                <span style="color: #00f2fe;">fly</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Burung terbang.)</p>
        `,
        questions: [
            { words: ["Birds", "fly"], correct: "Birds fly" },
            { words: ["I", "sleep"], correct: "I sleep" },
            { words: ["They", "run"], correct: "They run" },
            { words: ["We", "laugh"], correct: "We laugh" },
            { words: ["It", "rains"], correct: "It rains" },
            { words: ["Babies", "cry"], correct: "Babies cry" },
            { words: ["Fish", "swim"], correct: "Fish swim" }
        ]
    },
    {
        id: 2,
        title: "Level 2: Subject + Verb + Object",
        desc: "Pola standar (Pelaku + Aksi + Sasaran).",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Subject + Verb + Object</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Pola paling umum. Ada yang melakukan (Subject), aksinya (Verb), dan yang dikenai aksi (Object).</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">Subject</span> + 
                <span style="color: #00f2fe; font-weight:bold;">Verb</span> + 
                <span style="color: #fff; font-weight:bold;">Object</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">I</span> 
                <span style="color: #00f2fe;">eat</span> 
                <span style="color: #fff;">pizza</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Saya makan pizza.)</p>
        `,
        questions: [
            { words: ["I", "eat", "pizza"], correct: "I eat pizza" },
            { words: ["She", "reads", "a book"], correct: "She reads a book" },
            { words: ["They", "watch", "TV"], correct: "They watch TV" },
            { words: ["We", "play", "games"], correct: "We play games" },
            { words: ["He", "buys", "a car"], correct: "He buys a car" },
            { words: ["The cat", "chases", "the mouse"], correct: "The cat chases the mouse" }
        ]
    },
    {
        id: 3,
        title: "Level 3: S + To Be + Adjective",
        desc: "Menjelaskan sifat (Tanpa kata kerja aksi).",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Subject + To Be + Adjective</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Jika tidak ada kata kerja aksi (seperti makan, lari), gunakan <b>To Be</b> (am, is, are) untuk menyambung ke Kata Sifat (Adjective).</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">Subject</span> + 
                <span style="color: #00f2fe; font-weight:bold;">To Be</span> + 
                <span style="color: #fff; font-weight:bold;">Adjective</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">She</span> 
                <span style="color: #00f2fe;">is</span> 
                <span style="color: #fff;">smart</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 10px;">(Dia pintar.)</p>
            <p style="color:#f55; font-size:0.9rem;">JANGAN: She smart. (Salah!)</p>
        `,
        questions: [
            { words: ["She", "is", "smart"], correct: "She is smart" },
            { words: ["I", "am", "happy"], correct: "I am happy" },
            { words: ["They", "are", "busy"], correct: "They are busy" },
            { words: ["The car", "is", "fast"], correct: "The car is fast" },
            { words: ["He", "is", "tall"], correct: "He is tall" },
            { words: ["We", "are", "tired"], correct: "We are tired" }
        ]
    },
    {
        id: 4,
        title: "Level 4: S + To Be + Noun",
        desc: "Menjelaskan identitas atau profesi.",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Subject + To Be + Noun</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Gunakan pola ini untuk menjelaskan siapa atau apa subjek itu (Identitas/Profesi).</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">Subject</span> + 
                <span style="color: #00f2fe; font-weight:bold;">To Be</span> + 
                <span style="color: #fff; font-weight:bold;">Noun</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">He</span> 
                <span style="color: #00f2fe;">is</span> 
                <span style="color: #fff;">a doctor</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Dia adalah seorang dokter.)</p>
        `,
        questions: [
            { words: ["He", "is", "a doctor"], correct: "He is a doctor" },
            { words: ["I", "am", "a student"], correct: "I am a student" },
            { words: ["It", "is", "a cat"], correct: "It is a cat" },
            { words: ["They", "are", "friends"], correct: "They are friends" },
            { words: ["She", "is", "a teacher"], correct: "She is a teacher" },
            { words: ["We", "are", "winners"], correct: "We are winners" }
        ]
    },
    {
        id: 5,
        title: "Level 5: S + To Be + Location",
        desc: "Menjelaskan lokasi/keberadaan.",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Subject + To Be + Location</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Gunakan pola ini untuk memberitahu di mana subjek berada.</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">Subject</span> + 
                <span style="color: #00f2fe; font-weight:bold;">To Be</span> + 
                <span style="color: #fff; font-weight:bold;">Location</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">I</span> 
                <span style="color: #00f2fe;">am</span> 
                <span style="color: #fff;">at home</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Saya ada di rumah.)</p>
        `,
        questions: [
            { words: ["I", "am", "at home"], correct: "I am at home" },
            { words: ["She", "is", "in the room"], correct: "She is in the room" },
            { words: ["The book", "is", "on the table"], correct: "The book is on the table" },
            { words: ["They", "are", "at school"], correct: "They are at school" },
            { words: ["We", "are", "in the car"], correct: "We are in the car" }
        ]
    },
    {
        id: 6,
        title: "Level 6: S + Verb + Adverb",
        desc: "Menjelaskan CARA melakukan sesuatu.",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Subject + Verb + Adverb</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Adverb (Kata Keterangan) menjelaskan BAGAIMANA aksi dilakukan. Sering berakhiran <b>-ly</b>.</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">Subject</span> + 
                <span style="color: #00f2fe; font-weight:bold;">Verb</span> + 
                <span style="color: #fff; font-weight:bold;">Adverb</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">He</span> 
                <span style="color: #00f2fe;">runs</span> 
                <span style="color: #fff;">fast</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Dia berlari dengan cepat.)</p>
        `,
        questions: [
            { words: ["He", "runs", "fast"], correct: "He runs fast" },
            { words: ["She", "sings", "beautifully"], correct: "She sings beautifully" },
            { words: ["They", "walk", "slowly"], correct: "They walk slowly" },
            { words: ["I", "work", "hard"], correct: "I work hard" },
            { words: ["He", "speaks", "loudly"], correct: "He speaks loudly" }
        ]
    },
    {
        id: 7,
        title: "Level 7: S + V + O + Adverb",
        desc: "Kalimat lengkap dengan keterangan.",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">S + V + O + Adverb</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Jika ada Objek, letakkan Adverb SETELAH Objek. Jangan taruh di tengah-tengah antara Verb dan Object.</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">S</span> + 
                <span style="color: #00f2fe; font-weight:bold;">V</span> + 
                <span style="color: #fff; font-weight:bold;">O</span> +
                <span style="color: #f90; font-weight:bold;">Adv</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">I</span> 
                <span style="color: #00f2fe;">do</span> 
                <span style="color: #fff;">my homework</span>
                <span style="color: #f90;">carefully</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Saya mengerjakan PR dengan hati-hati.)</p>
        `,
        questions: [
            { words: ["I", "do", "my homework", "carefully"], correct: "I do my homework carefully" },
            { words: ["She", "drives", "the car", "slowly"], correct: "She drives the car slowly" },
            { words: ["He", "eats", "lunch", "quickly"], correct: "He eats lunch quickly" },
            { words: ["We", "play", "football", "happily"], correct: "We play football happily" }
        ]
    },
    {
        id: 8,
        title: "Level 8: S + V + to + Infinitive",
        desc: "Dua kata kerja digabung (want to, need to).",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">Verb + to + Verb</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Beberapa kata kerja (want, need, hope, plan) diikuti oleh "to" + kata kerja dasar.</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">S</span> + 
                <span style="color: #00f2fe; font-weight:bold;">Verb 1</span> + 
                <span style="color: #fff; font-weight:bold;">to</span> +
                <span style="color: #f90; font-weight:bold;">Verb 2</span>
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                <span style="color: #4facfe;">I</span> 
                <span style="color: #00f2fe;">want</span> 
                <span style="color: #fff;">to</span>
                <span style="color: #f90;">go</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Saya ingin pergi.)</p>
        `,
        questions: [
            { words: ["I", "want", "to go"], correct: "I want to go" },
            { words: ["She", "needs", "to sleep"], correct: "She needs to sleep" },
            { words: ["We", "hope", "to win"], correct: "We hope to win" },
            { words: ["They", "plan", "to visit"], correct: "They plan to visit" },
            { words: ["He", "likes", "to swim"], correct: "He likes to swim" }
        ]
    },
    {
        id: 9,
        title: "Level 9: S + V + that + Clause",
        desc: "Menggabungkan dua kalimat dengan 'that'.",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">S + V + that + Clause</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Kata kerja mental (think, know, believe, say) sering diikuti "that" (bahwa) untuk menyambung ke kalimat baru.</p>
            
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid var(--primary);">
                <span style="color: #4facfe; font-weight:bold;">I</span> 
                <span style="color: #00f2fe; font-weight:bold;">think</span> 
                <span style="color: #fff; font-weight:bold;">that</span>...
            </div>

            <p style="margin-bottom:10px;">Contoh:</p>
            <div style="font-size: 1.2rem; margin-bottom: 5px;">
                I think that <span style="color: #f90;">she is nice</span>.
            </div>
            <p style="color:#aaa; font-size:0.9rem; margin-bottom: 20px;">(Saya pikir bahwa dia baik.)</p>
        `,
        questions: [
            { words: ["I", "think", "that", "she is nice"], correct: "I think that she is nice" },
            { words: ["I", "know", "that", "he is smart"], correct: "I know that he is smart" },
            { words: ["She", "says", "that", "it is true"], correct: "She says that it is true" },
            { words: ["We", "believe", "that", "you can win"], correct: "We believe that you can win" }
        ]
    },
    {
        id: 10,
        title: "Level 10: GOLDEN RULE",
        desc: "URUTAN INGGRIS ITU MUTLAK!",
        material: `
            <h2 style="color:var(--primary); margin-bottom:15px;">GOLDEN RULE: Word Order</h2>
            <p style="margin-bottom:15px; font-size:1.1rem;">Dalam Bahasa Indonesia, kita bisa membalik urutan (Kue itu saya makan). Di Inggris, <b>TIDAK BISA!</b></p>
            
            <div style="background: rgba(255,0,0,0.2); padding: 15px; border-radius: 10px; margin-bottom: 10px; border: 1px solid #f00;">
                ❌ The cake I eat. (Salah/Aneh)
            </div>
            <div style="background: rgba(0,255,0,0.2); padding: 15px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #0f0;">
                ✅ I eat the cake. (Benar)
            </div>

            <p>Ingat: Selalu <b>S + V + O</b>. Jangan dibalik!</p>
        `,
        questions: [
            { words: ["I", "love", "you"], correct: "I love you" },
            { words: ["The dog", "bites", "the man"], correct: "The dog bites the man" },
            { words: ["You", "help", "me"], correct: "You help me" },
            { words: ["We", "watch", "the movie"], correct: "We watch the movie" },
            { words: ["He", "opens", "the door"], correct: "He opens the door" }
        ]
    }
];

let currentGrammarLevel = null;
let currentQuestionIndex = 0;
let currentSentence = [];

// --- FUNCTIONS ---

function showGrammarMenu() {
    switchScreen('grammar-menu-screen');
    renderGrammarLevels();
}

function renderGrammarLevels() {
    const list = document.getElementById('grammar-level-list');
    list.innerHTML = '';
    
    grammarLevels.forEach((level, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-push btn-secondary';
        btn.style.width = '100%';
        btn.style.marginBottom = '15px';
        btn.style.display = 'flex';
        btn.style.justifyContent = 'space-between';
        btn.style.alignItems = 'center';
        
        btn.innerHTML = `
            <div style="text-align:left;">
                <div style="font-size:1.1rem; font-weight:bold;">${level.title}</div>
                <div style="font-size:0.8rem; opacity:0.8;">${level.desc}</div>
            </div>
            <span>▶️</span>
        `;
        btn.onclick = () => startGrammarLevel(index);
        list.appendChild(btn);
    });
}

function startGrammarLevel(index) {
    currentGrammarLevel = grammarLevels[index];
    currentQuestionIndex = 0;
    showMaterial();
}

function showMaterial() {
    switchScreen('grammar-material-screen');
    document.getElementById('material-content').innerHTML = currentGrammarLevel.material;
}

function startGrammarQuiz() {
    switchScreen('grammar-game-screen');
    loadGrammarQuestion();
}

function loadGrammarQuestion() {
    if (currentQuestionIndex >= currentGrammarLevel.questions.length) {
        // Level Complete
        fireConfetti();
        document.getElementById('sfx-win').play();
        alert("Level Complete! Great job!");
        showGrammarMenu();
        return;
    }
    
    const q = currentGrammarLevel.questions[currentQuestionIndex];
    currentSentence = [];
    updateSentenceDisplay();
    
    // Update Progress
    document.getElementById('grammar-progress').innerText = `${currentQuestionIndex + 1} / ${currentGrammarLevel.questions.length}`;
    
    const wordPool = document.getElementById('word-pool');
    wordPool.innerHTML = '';
    
    // Shuffle words for the pool
    // Create objects to track original index to handle duplicate words if any (though unlikely in simple sentences)
    const wordObjects = q.words.map((word, idx) => ({ word, id: idx }));
    const shuffled = wordObjects.sort(() => Math.random() - 0.5);
    
    shuffled.forEach(obj => {
        const btn = document.createElement('button');
        btn.className = 'word-chip';
        // Inline styles for word chips to match the neon theme
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
        btn.style.border = '1px solid var(--primary)';
        btn.style.color = '#fff';
        btn.style.padding = '10px 20px';
        btn.style.borderRadius = '20px';
        btn.style.margin = '5px';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '1rem';
        btn.style.transition = 'all 0.2s';
        
        btn.innerText = obj.word;
        btn.onclick = () => addWordToSentence(obj, btn);
        wordPool.appendChild(btn);
    });
}

function addWordToSentence(wordObj, btn) {
    currentSentence.push(wordObj);
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    updateSentenceDisplay();
}

function updateSentenceDisplay() {
    const display = document.getElementById('sentence-display');
    display.innerHTML = '';
    
    if (currentSentence.length === 0) {
        display.innerHTML = '<span style="color:#666; font-style:italic;">Tap words to build sentence...</span>';
        return;
    }

    currentSentence.forEach((obj, idx) => {
        const span = document.createElement('span');
        span.innerText = obj.word;
        span.style.display = 'inline-block';
        span.style.padding = '5px 10px';
        span.style.margin = '0 5px';
        span.style.background = 'var(--secondary)';
        span.style.borderRadius = '10px';
        span.style.cursor = 'pointer';
        span.onclick = () => removeWordFromSentence(idx);
        display.appendChild(span);
    });
}

function removeWordFromSentence(indexToRemove) {
    const removedObj = currentSentence[indexToRemove];
    currentSentence.splice(indexToRemove, 1);
    
    // Find the button in the pool and restore it
    const wordPool = document.getElementById('word-pool');
    Array.from(wordPool.children).forEach(btn => {
        if (btn.innerText === removedObj.word && btn.style.opacity === '0') {
            // This is a bit loose if there are duplicate words, but sufficient for now
            // To be precise we'd need to link the button to the object ID
            // Let's just restore the first matching hidden button
             if (!btn.restored) {
                 btn.style.opacity = '1';
                 btn.style.pointerEvents = 'auto';
                 btn.restored = true; // Temporary flag for this loop
             }
        }
    });
    
    // Clear temp flags
    Array.from(wordPool.children).forEach(btn => delete btn.restored);
    
    updateSentenceDisplay();
}

function resetSentence() {
    currentSentence = [];
    updateSentenceDisplay();
    const wordPool = document.getElementById('word-pool');
    Array.from(wordPool.children).forEach(btn => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    });
}

function checkGrammarAnswer() {
    const q = currentGrammarLevel.questions[currentQuestionIndex];
    const answer = currentSentence.map(obj => obj.word).join(' ');
    
    if (answer === q.correct) {
        // Correct
        document.getElementById('sfx-win').play();
        const display = document.getElementById('sentence-display');
        display.style.border = '2px solid #0f0';
        
        setTimeout(() => {
            display.style.border = 'none';
            currentQuestionIndex++;
            loadGrammarQuestion();
        }, 1000);
    } else {
        // Wrong
        document.getElementById('sfx-lose').play();
        const display = document.getElementById('sentence-display');
        display.style.border = '2px solid #f00';
        display.classList.add('shake'); // Assuming shake animation exists or we add it
        setTimeout(() => {
            display.style.border = 'none';
            display.classList.remove('shake');
            resetSentence();
        }, 800);
    }
}
