// ===================== DATA =====================
const sessions = [
  {
    id:1, title:"Sesi 1: Pergi ke Pasar", desc:"Sayuran & transaksi dasar",
    teksId:"Setiap pagi, Sari pergi ke pasar untuk membeli sayuran segar. Dia selalu memilih tomat merah dan wortel besar. Para pedagang di sana sangat ramah dan sering memberi harga istimewa.",
    words:[
      {en:'Every',pron:'/ˈɛv.ri/',id:'Setiap',ex:'Every day I learn something new.'},
      {en:'morning',pron:'/ˈmɔːr.nɪŋ/',id:'Pagi hari',ex:'I drink coffee every morning.'},
      {en:'goes',pron:'/ɡoʊz/',id:'Pergi (dia)',ex:'She goes to school by bus.'},
      {en:'market',pron:'/ˈmɑːr.kɪt/',id:'Pasar',ex:'The market opens at 6 AM.'},
      {en:'buy',pron:'/baɪ/',id:'Membeli',ex:'I want to buy some fruit.'},
      {en:'fresh',pron:'/frɛʃ/',id:'Segar',ex:'Fresh air is good for health.'},
      {en:'vegetables',pron:'/ˈvɛdʒ.tə.bəlz/',id:'Sayuran',ex:'Eat more vegetables every day.'},
      {en:'always',pron:'/ˈɔːl.weɪz/',id:'Selalu',ex:'She always smiles at me.'},
      {en:'chooses',pron:'/ˈtʃuːzɪz/',id:'Memilih',ex:'He always chooses the best.'},
      {en:'red',pron:'/rɛd/',id:'Merah',ex:'The red apple looks delicious.'},
      {en:'tomatoes',pron:'/təˈmeɪ.toʊz/',id:'Tomat',ex:'I put tomatoes in the salad.'},
      {en:'large',pron:'/lɑːrdʒ/',id:'Besar',ex:'We need a large box.'},
      {en:'carrots',pron:'/ˈkær.əts/',id:'Wortel',ex:'Carrots are good for your eyes.'},
      {en:'vendors',pron:'/ˈvɛn.dərz/',id:'Pedagang',ex:'The vendors sell fruits cheaply.'},
      {en:'friendly',pron:'/ˈfrɛnd.li/',id:'Ramah',ex:'She is very friendly.'},
      {en:'often',pron:'/ˈɔː.fən/',id:'Sering',ex:'I often visit my grandmother.'},
      {en:'special',pron:'/ˈspɛʃ.əl/',id:'Istimewa',ex:'Today is a special day.'},
      {en:'price',pron:'/praɪs/',id:'Harga',ex:'What is the price of this?'},
      {en:'very',pron:'/ˈvɛr.i/',id:'Sangat',ex:'She is very kind.'},
    ],
    sentences:[
      ['Every','morning',',','Sari','goes','to','the','market','to','buy','fresh','vegetables','.'],
      ['She','always','chooses','red','tomatoes','and','large','carrots','.'],
      ['The','vendors','there','are','very','friendly','and','often','give','her','a','special','price','.'],
    ],
    speakEmoji:"🍅🥕🥬", speakPrompt:"Sayuran apa yang kamu lihat? Ceritakan dalam bahasa Inggris.",
    speakEx:"I see red tomatoes, orange carrots, and green lettuce.",
    speakExId:"Saya melihat tomat merah, wortel oranye, dan selada hijau."
  },
  {
    id:2, title:"Sesi 2: Memesan Makanan", desc:"Makanan & angka dasar",
    teksId:"Budi pergi ke restoran untuk makan siang. Dia memesan nasi goreng dan es teh manis. Harganya dua puluh ribu rupiah. Makanannya sangat enak.",
    words:[
      {en:'restaurant',pron:'/ˈrɛs.tə.rɒnt/',id:'Restoran',ex:'Let\'s go to a restaurant tonight.'},
      {en:'lunch',pron:'/lʌntʃ/',id:'Makan siang',ex:'I eat lunch at noon.'},
      {en:'orders',pron:'/ˈɔːr.dərz/',id:'Memesan',ex:'She orders coffee every day.'},
      {en:'fried',pron:'/fraɪd/',id:'Goreng',ex:'I like fried chicken.'},
      {en:'rice',pron:'/raɪs/',id:'Nasi',ex:'Rice is the main food here.'},
      {en:'sweet',pron:'/swiːt/',id:'Manis',ex:'This cake is very sweet.'},
      {en:'tea',pron:'/tiː/',id:'Teh',ex:'Would you like some tea?'},
      {en:'thousand',pron:'/ˈθaʊ.zənd/',id:'Ribu',ex:'It costs twenty thousand.'},
      {en:'delicious',pron:'/dɪˈlɪʃ.əs/',id:'Enak/Lezat',ex:'The food is delicious.'},
      {en:'twenty',pron:'/ˈtwɛn.ti/',id:'Dua puluh',ex:'I have twenty books.'},
    ],
    sentences:[
      ['Budi','goes','to','a','restaurant','for','lunch','.'],
      ['He','orders','fried','rice','and','sweet','iced','tea','.'],
      ['The','food','is','very','delicious','.'],
    ],
    speakEmoji:"🍛🧊🍵", speakPrompt:"Apa yang Budi pesan? Ceritakan dalam bahasa Inggris.",
    speakEx:"Budi orders fried rice and sweet iced tea for lunch.",
    speakExId:"Budi memesan nasi goreng dan es teh manis untuk makan siang."
  },
  {
    id:3, title:"Sesi 3: Perkenalan Diri", desc:"Nama, asal & hobi",
    teksId:"Nama saya Rina. Saya berasal dari Jakarta. Saya suka membaca buku dan mendengarkan musik. Saya seorang mahasiswa di universitas.",
    words:[
      {en:'name',pron:'/neɪm/',id:'Nama',ex:'My name is Rina.'},
      {en:'from',pron:'/frɒm/',id:'Dari/Berasal',ex:'I am from Jakarta.'},
      {en:'like',pron:'/laɪk/',id:'Suka',ex:'I like reading books.'},
      {en:'reading',pron:'/ˈriː.dɪŋ/',id:'Membaca',ex:'Reading is my hobby.'},
      {en:'books',pron:'/bʊks/',id:'Buku-buku',ex:'She has many books.'},
      {en:'listening',pron:'/ˈlɪs.ən.ɪŋ/',id:'Mendengarkan',ex:'I enjoy listening to music.'},
      {en:'music',pron:'/ˈmjuː.zɪk/',id:'Musik',ex:'Music makes me happy.'},
      {en:'student',pron:'/ˈstuː.dənt/',id:'Mahasiswa',ex:'He is a student.'},
      {en:'university',pron:'/juː.nɪˈvɜː.sə.ti/',id:'Universitas',ex:'She studies at a university.'},
    ],
    sentences:[
      ['My','name','is','Rina','.'],
      ['I','am','from','Jakarta','.'],
      ['I','like','reading','books','and','listening','to','music','.'],
      ['I','am','a','student','at','a','university','.'],
    ],
    speakEmoji:"👋📚🎵", speakPrompt:"Perkenalkan dirimu dalam bahasa Inggris. Sebutkan nama, asal, dan hobimu.",
    speakEx:"My name is ... I am from ... I like ...",
    speakExId:"Nama saya ... Saya dari ... Saya suka ..."
  },
];

// ===================== STATE =====================
let curView = 'viewHome';
let curSession = null;
let curStep = 0;
let savedWords = new Set();
let timerInterval = null;
let timerSeconds = 900; // 15 min

// Load progress from localStorage
function loadProgress() {
  const data = JSON.parse(localStorage.getItem('eng2_progress') || '{}');
  return { completed: data.completed || [], dictionary: data.dictionary || [] };
}
function saveProgress(prog) { localStorage.setItem('eng2_progress', JSON.stringify(prog)); }

// ===================== VIEWS =====================
function showView(id, navBtn) {
  // Stop timer if leaving session
  if (curView === 'viewSession') clearInterval(timerInterval);

  document.querySelectorAll('.view').forEach(v => v.classList.remove('show'));
  document.getElementById(id).classList.add('show');
  curView = id;

  const nav = document.getElementById('bottomNav');
  nav.style.display = (id === 'viewSession') ? 'none' : 'flex';

  if (navBtn) {
    document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
    navBtn.classList.add('active');
  }

  if (id === 'viewHome') renderJourney();
  if (id === 'viewDict') renderDictionary();
}

// ===================== HOME / JOURNEY =====================
function renderJourney() {
  const prog = loadProgress();
  const list = document.getElementById('journeyList');
  list.innerHTML = '';

  sessions.forEach((s, i) => {
    const done = prog.completed.includes(s.id);
    const prevDone = i === 0 || prog.completed.includes(sessions[i - 1].id);
    const isActive = !done && prevDone;
    const locked = !done && !prevDone;

    const status = done ? 'done' : isActive ? 'active' : 'locked';
    const card = document.createElement('div');
    card.className = `j-card glass ${status}`;

    card.innerHTML = `
      <div class="j-icon ${status}-bg">${done ? '✅' : isActive ? '▶️' : '🔒'}</div>
      <div class="j-body">
        <div class="j-title">${s.title}</div>
        <div class="j-desc">${s.desc}</div>
      </div>
      <div class="j-status s-${status}">${done ? 'Selesai' : isActive ? 'Mulai' : 'Terkunci'}</div>
    `;

    if (isActive) card.onclick = () => startSession(s);
    if (done) card.onclick = () => startSession(s); // allow replay
    list.appendChild(card);
  });
}

// ===================== SESSION =====================
function startSession(session) {
  curSession = session;
  curStep = 0;
  savedWords = new Set();
  timerSeconds = 900;

  // Load session content
  document.getElementById('sessTitle').textContent = session.title;
  document.getElementById('readId').textContent = session.teksId;
  document.getElementById('trId').textContent = session.teksId;

  // Build English reading text
  buildReadingText(session);

  // Build English listening transcript
  const enText = session.sentences.map(s => s.join(' ')).join(' ').replace(/ ([,.])/g, '$1');
  document.getElementById('trEn').textContent = enText;

  // Speaking
  document.getElementById('speakEmoji').textContent = session.speakEmoji;
  document.getElementById('speakPrompt').textContent = session.speakPrompt;
  document.getElementById('speakEx').textContent = session.speakEx;
  document.getElementById('speakExId').textContent = session.speakExId;
  document.getElementById('hintBox').classList.remove('show');

  // Reset audio
  audioElapsed = 0;
  audioPlaying = false;
  document.getElementById('playBtn').textContent = '▶';
  document.getElementById('tFill').style.width = '0%';
  document.getElementById('tTime').textContent = '0:00';

  // Reset saved tags
  document.getElementById('savedTags').innerHTML = '<span class="empty-tag">Belum ada — klik kata di atas</span>';

  showView('viewSession');
  updateStepUI();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerSeconds--;
    if (timerSeconds <= 0) { clearInterval(timerInterval); timerSeconds = 0; }
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    document.getElementById('sessTimer').textContent = `${m}:${String(s).padStart(2, '0')}`;
  }, 1000);
}

function updateStepUI() {
  // Panels
  for (let i = 0; i <= 3; i++) {
    const el = document.getElementById('step' + i);
    if (el) el.classList.toggle('show', i === curStep);
  }
  // Dots
  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById('sd' + i);
    dot.className = 'step-dot' + (i < curStep ? ' done' : '') + (i === curStep ? ' active' : '');
    const lab = document.getElementById('sl' + i);
    lab.className = 'sl' + (i < curStep ? ' done' : '') + (i === curStep ? ' active' : '');
  }
  // Nav buttons
  const back = document.getElementById('btnBack');
  const next = document.getElementById('btnNext');
  const nav = document.getElementById('sessNav');

  if (curStep === 3) { nav.style.display = 'none'; return; }
  nav.style.display = 'flex';
  back.style.visibility = curStep === 0 ? 'hidden' : 'visible';

  if (curStep === 0) { next.textContent = 'Lanjut ke Mendengar →'; next.className = 'nav-btn primary'; }
  else if (curStep === 1) { next.textContent = 'Lanjut ke Berbicara →'; next.className = 'nav-btn primary'; }
  else { next.textContent = 'Selesai ✓'; next.className = 'nav-btn green'; }
}

function nextStep() { if (curStep <= 2) { curStep++; updateStepUI(); if (curStep === 3) showDone(); } }
function prevStep() { if (curStep > 0) { curStep--; updateStepUI(); } }

function showDone() {
  clearInterval(timerInterval);
  document.getElementById('statW').textContent = savedWords.size;
}

function finishSession() {
  const prog = loadProgress();
  if (!prog.completed.includes(curSession.id)) prog.completed.push(curSession.id);

  // Save words to dictionary
  savedWords.forEach(w => {
    const wd = curSession.words.find(x => x.en === w);
    if (wd && !prog.dictionary.find(d => d.en === wd.en)) {
      prog.dictionary.push({ en: wd.en, pron: wd.pron, id: wd.id, ex: wd.ex });
    }
  });

  saveProgress(prog);
  showView('viewHome');
}

// ===================== READING =====================
function buildReadingText(session) {
  const c = document.getElementById('readEn');
  c.innerHTML = '';
  session.sentences.forEach((s, si) => {
    if (si > 0) c.appendChild(document.createTextNode(' '));
    s.forEach(w => {
      const cl = w.replace(/[,.]/g, '');
      const d = session.words.find(x => x.en.toLowerCase() === cl.toLowerCase());
      if (d && cl.length > 1) {
        const sp = document.createElement('span');
        sp.className = 'w';
        sp.textContent = w + ' ';
        sp.onclick = e => { e.stopPropagation(); sp.classList.add('saved'); savedWords.add(d.en); updateSavedTags(); showPopup(e, d); };
        c.appendChild(sp);
      } else {
        c.appendChild(document.createTextNode(w + ' '));
      }
    });
  });
}

function showPopup(e, d) {
  const p = document.getElementById('popup');
  document.getElementById('pW').textContent = d.en;
  document.getElementById('pP').textContent = d.pron;
  document.getElementById('pA').textContent = '🇮🇩 ' + d.id;
  document.getElementById('pC').textContent = '"' + d.ex + '"';
  p.style.display = 'block';
  let t = e.clientY + 14, l = e.clientX;
  if (l + 250 > innerWidth) l = innerWidth - 260;
  if (t + 120 > innerHeight) t = e.clientY - 130;
  p.style.top = t + 'px';
  p.style.left = l + 'px';
  setTimeout(() => p.style.display = 'none', 3500);
}
document.addEventListener('click', () => document.getElementById('popup').style.display = 'none');

function updateSavedTags() {
  const c = document.getElementById('savedTags');
  if (!savedWords.size) { c.innerHTML = '<span class="empty-tag">Belum ada</span>'; return; }
  c.innerHTML = [...savedWords].map(w => `<span class="tag">${w}</span>`).join('');
}

// ===================== AUDIO =====================
let audioPlaying = false, audioElapsed = 0, audioTimer;
function togglePlay() {
  audioPlaying = !audioPlaying;
  const b = document.getElementById('playBtn');
  b.textContent = audioPlaying ? '⏸' : '▶';
  if (audioPlaying) {
    audioTimer = setInterval(() => {
      audioElapsed += 0.5;
      if (audioElapsed >= 18) { audioElapsed = 0; audioPlaying = false; b.textContent = '▶'; clearInterval(audioTimer); }
      document.getElementById('tFill').style.width = (audioElapsed / 18 * 100) + '%';
      document.getElementById('tTime').textContent = '0:' + String(Math.floor(audioElapsed)).padStart(2, '0');
    }, 500);
  } else { clearInterval(audioTimer); }
}

function setSub(m, btn) {
  document.querySelectorAll('.sbtn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const i = document.getElementById('trId'), e = document.getElementById('trEn');
  i.style.display = (m === 'both' || m === 'id') ? '' : 'none';
  e.style.display = (m === 'both' || m === 'en') ? '' : 'none';
}

// ===================== DICTIONARY =====================
function renderDictionary() {
  const prog = loadProgress();
  const list = document.getElementById('dictList');
  document.getElementById('dictCount').textContent = prog.dictionary.length + ' kata tersimpan';

  if (!prog.dictionary.length) {
    list.innerHTML = '<div class="empty-dict">Belum ada kata tersimpan. Mulai belajar untuk mengisi kamusmu!</div>';
    return;
  }
  list.innerHTML = prog.dictionary.map(w => `
    <div class="dict-item glass">
      <div>
        <div class="dict-word">${w.en}</div>
        <div class="dict-pron">${w.pron}</div>
      </div>
      <div class="dict-id">${w.id}</div>
    </div>
  `).join('');
}

// ===================== INIT =====================
renderJourney();
