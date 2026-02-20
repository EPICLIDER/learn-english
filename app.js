// ===== User State =====
let currentUser = null;

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSpeechSynthesis();
  initScrollReveal();
  checkUserSession();
});

// ===== Session Management =====
function checkUserSession() {
  const saved = localStorage.getItem('learnEnglishUser');
  if (saved) {
    currentUser = JSON.parse(saved);
    showApp();
  } else {
    showRegistration();
  }
}

function saveUser() {
  localStorage.setItem('learnEnglishUser', JSON.stringify(currentUser));
}

function logout() {
  if (confirm('Are you sure you want to log out? Your progress will be saved.')) {
    showRegistration();
  }
}

function deleteAccount() {
  if (confirm('Delete your account and all progress? This cannot be undone.')) {
    localStorage.removeItem('learnEnglishUser');
    currentUser = null;
    showRegistration();
  }
}

// ===== Show/Hide Screens =====
function hideAllScreens() {
  document.getElementById('registration-screen').classList.remove('active');
  document.getElementById('level-selection-screen').classList.remove('active');
  document.getElementById('placement-test-screen').classList.remove('active');
  document.getElementById('main-app').style.display = 'none';
}

function showRegistration() {
  hideAllScreens();
  document.getElementById('registration-screen').classList.add('active');
  document.getElementById('main-app').style.display = 'none';
  document.querySelector('.nav').style.display = 'none';
}

function showLevelSelection() {
  hideAllScreens();
  document.getElementById('level-selection-screen').classList.add('active');
  renderLevelCards();
}

function showPlacementTest(levelId) {
  hideAllScreens();
  document.getElementById('placement-test-screen').classList.add('active');
  startPlacementTest(levelId);
}

function showApp() {
  hideAllScreens();
  document.getElementById('main-app').style.display = 'block';
  document.querySelector('.nav').style.display = '';
  updateDashboard();
  initVocabulary();
  initQuiz();
  initGrammar();
  initWordOfDay();
  updateLevelUpSection();
  initScrollReveal();
}

// ===== Registration =====
function submitRegistration() {
  const nameInput = document.getElementById('reg-name');
  const name = nameInput.value.trim();
  if (!name) { nameInput.classList.add('error'); return; }
  nameInput.classList.remove('error');
  currentUser = { name, level: null, xp: 0, completedCategories: [], quizHighScores: {}, testsPassed: [] };
  saveUser();
  showLevelSelection();
}

// ===== Level Selection =====
function renderLevelCards() {
  const grid = document.getElementById('level-cards-grid');
  grid.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.style.setProperty('--level-color', lvl.color);
    card.style.animationDelay = `${i * 80}ms`;
    card.innerHTML = `
      <div class="level-card-icon">${lvl.icon}</div>
      <div class="level-card-id">${lvl.id}</div>
      <div class="level-card-name">${lvl.name}</div>
      <div class="level-card-desc">${lvl.desc}</div>
    `;
    card.addEventListener('click', () => selectLevel(lvl.id));
    grid.appendChild(card);
  });
}

function selectLevel(levelId) {
  if (levelId === 'A0') {
    currentUser.level = 'A0';
    currentUser.completedCategories = [];
    saveUser();
    showApp();
  } else {
    showPlacementTest(levelId);
  }
}

// ===== Placement Test =====
let placementState = { questions: [], current: 0, score: 0, answered: false, targetLevel: '' };

function startPlacementTest(levelId) {
  const questions = levelQuizzes[levelId];
  if (!questions || questions.length === 0) { selectLevel('A0'); return; }
  placementState = {
    questions: shuffleArray([...questions]).slice(0, 7),
    current: 0, score: 0, answered: false, targetLevel: levelId
  };
  const lvl = LEVELS.find(l => l.id === levelId);
  document.getElementById('placement-level-badge').textContent = `${lvl.icon} ${lvl.id} — ${lvl.name}`;
  document.getElementById('placement-level-badge').style.setProperty('--level-color', lvl.color);
  renderPlacementQuestion();
}

function renderPlacementQuestion() {
  const { questions, current, score } = placementState;
  if (current >= questions.length) { finishPlacementTest(); return; }
  const q = questions[current];
  const progress = (current / questions.length) * 100;
  document.getElementById('placement-progress-fill').style.width = `${progress}%`;
  document.getElementById('placement-progress-text').textContent = `${current + 1}/${questions.length}`;
  document.getElementById('placement-score-value').textContent = score;
  document.getElementById('placement-question').textContent = q.question;
  const opts = document.getElementById('placement-options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handlePlacementAnswer(i, btn));
    opts.appendChild(btn);
  });
  document.getElementById('placement-feedback').className = 'quiz-feedback';
  document.getElementById('placement-next').classList.remove('show');
  placementState.answered = false;
}

function handlePlacementAnswer(idx, button) {
  if (placementState.answered) return;
  placementState.answered = true;
  const q = placementState.questions[placementState.current];
  const correct = idx === q.answer;
  const feedback = document.getElementById('placement-feedback');
  document.querySelectorAll('#placement-options .quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
  });
  if (correct) {
    placementState.score++;
    document.getElementById('placement-score-value').textContent = placementState.score;
    feedback.textContent = '🎉 Correct!';
    feedback.className = 'quiz-feedback correct show';
  } else {
    button.classList.add('wrong');
    feedback.textContent = `❌ Correct: "${q.options[q.answer]}"`;
    feedback.className = 'quiz-feedback wrong show';
  }
  document.getElementById('placement-next').classList.add('show');
}

function nextPlacementQuestion() {
  placementState.current++;
  renderPlacementQuestion();
}

function finishPlacementTest() {
  const { score, questions, targetLevel } = placementState;
  const pct = Math.round((score / questions.length) * 100);
  const resultDiv = document.getElementById('placement-result');
  document.getElementById('placement-question').textContent = '';
  document.getElementById('placement-options').innerHTML = '';
  document.getElementById('placement-feedback').className = 'quiz-feedback';
  document.getElementById('placement-next').classList.remove('show');
  document.getElementById('placement-progress-fill').style.width = '100%';

  if (pct >= 70) {
    resultDiv.innerHTML = `
      <div class="placement-result-content show">
        <h3>🎉 Congratulations!</h3>
        <div class="result-score">${score}/${questions.length}</div>
        <p>You passed! Starting at <strong>${targetLevel}</strong> level.</p>
        <button class="btn btn-primary" onclick="acceptPlacementResult('${targetLevel}')">Continue →</button>
      </div>`;
  } else {
    const levelIndex = LEVELS.findIndex(l => l.id === targetLevel);
    const newLevel = levelIndex > 0 ? LEVELS[levelIndex - 1].id : 'A0';
    if (newLevel === 'A0') {
      resultDiv.innerHTML = `
        <div class="placement-result-content show">
          <h3>📚 Let's Start from the Beginning</h3>
          <div class="result-score">${score}/${questions.length}</div>
          <p>Don't worry! Everyone starts somewhere. You'll begin at <strong>A0</strong>.</p>
          <button class="btn btn-primary" onclick="acceptPlacementResult('A0')">Start Learning →</button>
        </div>`;
    } else {
      resultDiv.innerHTML = `
        <div class="placement-result-content show">
          <h3>💪 Almost There!</h3>
          <div class="result-score">${score}/${questions.length}</div>
          <p>Let's try <strong>${newLevel}</strong> level instead.</p>
          <button class="btn btn-primary" onclick="retryPlacementAtLevel('${newLevel}')">Take ${newLevel} Test →</button>
        </div>`;
    }
  }
  resultDiv.style.display = 'block';
}

function acceptPlacementResult(levelId) {
  currentUser.level = levelId;
  currentUser.completedCategories = [];
  saveUser();
  showApp();
}

function retryPlacementAtLevel(levelId) {
  document.getElementById('placement-result').style.display = 'none';
  document.getElementById('placement-result').innerHTML = '';
  showPlacementTest(levelId);
}

// ===== Dashboard =====
function updateDashboard() {
  const lvl = LEVELS.find(l => l.id === currentUser.level);
  document.getElementById('user-greeting').textContent = `Welcome, ${currentUser.name}!`;
  document.getElementById('user-level-badge').textContent = `${lvl.icon} ${lvl.id}`;
  document.getElementById('user-level-badge').style.setProperty('--level-color', lvl.color);
  document.getElementById('user-level-name').textContent = lvl.name;
  document.getElementById('nav-user-name').textContent = currentUser.name;
  document.getElementById('nav-user-level').textContent = `${lvl.icon} ${lvl.id}`;
  // Update hero
  document.querySelector('.hero-text h1').innerHTML = `Keep Going,<br><span class="gradient-text">${currentUser.name}</span>! ✨`;
  document.querySelector('.hero-text p').textContent = `You're at ${lvl.id} — ${lvl.name}. Master all skills to level up!`;
  // Progress
  const cats = Object.keys(levelVocabulary[currentUser.level] || {});
  const completed = cats.filter(c => currentUser.completedCategories.includes(c));
  const pct = cats.length ? Math.round((completed.length / cats.length) * 100) : 0;
  document.getElementById('skills-progress-fill').style.width = `${pct}%`;
  document.getElementById('skills-progress-text').textContent = `${completed.length}/${cats.length} skills`;
}

// ===== Navigation =====
function initNavigation() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); navLinks.classList.remove('open'); }
    });
  });
}

// ===== Vocabulary =====
function initVocabulary() {
  const level = currentUser.level;
  const vocab = levelVocabulary[level] || {};
  const cats = Object.keys(vocab);
  const tabsContainer = document.getElementById('vocab-tabs');
  tabsContainer.innerHTML = '';
  cats.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'vocab-tab' + (i === 0 ? ' active' : '');
    btn.dataset.category = cat;
    btn.textContent = categoryNames[cat] || cat;
    if (currentUser.completedCategories.includes(cat)) btn.classList.add('completed');
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.vocab-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderVocab(cat);
    });
    tabsContainer.appendChild(btn);
  });
  if (cats.length > 0) renderVocab(cats[0]);
}

function renderVocab(category) {
  const grid = document.getElementById('vocab-grid');
  const level = currentUser.level;
  const words = (levelVocabulary[level] || {})[category] || [];
  grid.innerHTML = '';
  grid.style.opacity = '0';
  setTimeout(() => {
    words.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'vocab-card';
      card.style.animationDelay = `${index * 50}ms`;
      card.innerHTML = `
        <button class="speak-btn" title="Listen" onclick="speakWord('${item.word}')">🔊</button>
        <span class="emoji">${item.emoji}</span>
        <span class="word">${item.word}</span>
        <span class="phonetic">${item.phonetic}</span>
        <span class="translation">${item.translation}</span>
      `;
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('speak-btn')) return;
        card.classList.toggle('revealed');
      });
      grid.appendChild(card);
    });
    grid.style.opacity = '1';
    grid.style.transition = 'opacity 0.4s ease';
    // Mark category as completed
    if (!currentUser.completedCategories.includes(category)) {
      currentUser.completedCategories.push(category);
      saveUser();
      updateDashboard();
      const activeTab = document.querySelector(`.vocab-tab[data-category="${category}"]`);
      if (activeTab) activeTab.classList.add('completed');
      updateLevelUpSection();
    }
  }, 100);
}

// ===== Speech Synthesis =====
function initSpeechSynthesis() {
  if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
}
function speakWord(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US'; u.rate = 0.85; u.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    const v = voices.find(v => v.lang.startsWith('en'));
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  }
}

// ===== Quiz =====
let quizState = { currentQuestion: 0, score: 0, answered: false, questions: [] };

function initQuiz() {
  const level = currentUser.level;
  const questions = levelQuizzes[level] || [];
  quizState = { questions: shuffleArray([...questions]).slice(0, 5), currentQuestion: 0, score: 0, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { currentQuestion, questions, score } = quizState;
  if (currentQuestion >= questions.length) { showQuizResult(); return; }
  const q = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = `${progress}%`;
  document.getElementById('quiz-progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
  document.getElementById('quiz-score-value').textContent = score;
  document.getElementById('quiz-question').textContent = q.question;
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(i, btn));
    opts.appendChild(btn);
  });
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('quiz-feedback').classList.remove('show');
  document.getElementById('quiz-next').classList.remove('show');
  document.getElementById('quiz-result-container').classList.remove('show');
  quizState.answered = false;
}

function handleAnswer(selectedIndex, button) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.currentQuestion];
  const isCorrect = selectedIndex === q.answer;
  const feedback = document.getElementById('quiz-feedback');
  document.querySelectorAll('#quiz-options .quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
  });
  if (isCorrect) {
    quizState.score++;
    document.getElementById('quiz-score-value').textContent = quizState.score;
    feedback.textContent = '🎉 Correct! Well done!';
    feedback.className = 'quiz-feedback correct show';
  } else {
    button.classList.add('wrong');
    feedback.textContent = `❌ Not quite! The answer is "${q.options[q.answer]}".`;
    feedback.className = 'quiz-feedback wrong show';
  }
  document.getElementById('quiz-next').classList.add('show');
}

function nextQuestion() { quizState.currentQuestion++; renderQuizQuestion(); }

function showQuizResult() {
  const { score, questions } = quizState;
  const pct = Math.round((score / questions.length) * 100);
  document.getElementById('quiz-options').innerHTML = '';
  document.getElementById('quiz-question').textContent = '';
  document.getElementById('quiz-feedback').classList.remove('show');
  document.getElementById('quiz-next').classList.remove('show');
  document.getElementById('quiz-progress-fill').style.width = '100%';
  let msg;
  if (pct === 100) msg = '🏆 Perfect score! You\'re a star!';
  else if (pct >= 80) msg = '🌟 Excellent! Almost perfect!';
  else if (pct >= 60) msg = '👍 Good job! Keep practicing!';
  else msg = '💪 Don\'t give up! Practice makes perfect!';
  document.getElementById('quiz-result-score').textContent = `${score}/${questions.length}`;
  document.getElementById('quiz-result-message').textContent = msg;
  document.getElementById('quiz-result-container').classList.add('show');
}

function restartQuiz() { initQuiz(); }

// ===== Grammar =====
function initGrammar() {
  const level = currentUser.level;
  const tips = levelGrammar[level] || [];
  const grid = document.getElementById('grammar-grid');
  grid.innerHTML = '';
  tips.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'grammar-card reveal';
    let examplesHtml = tip.examples.map(ex => {
      if (ex.startsWith('✗')) return `<span class="incorrect">${ex}</span>`;
      return `<span class="correct">${ex}</span>`;
    }).join('<br>');
    card.innerHTML = `
      <h3>${tip.title} <span class="tag">${tip.tag}</span></h3>
      <p style="color:var(--text-secondary);font-size:0.95rem;">${tip.desc}</p>
      <div class="grammar-example">${examplesHtml}</div>
    `;
    grid.appendChild(card);
  });
  initScrollReveal();
}

// ===== Word of Day =====
function initWordOfDay() {
  const level = currentUser.level;
  const words = levelWordsOfDay[level] || [];
  if (words.length === 0) return;
  const dayIndex = new Date().getDate() % words.length;
  const wod = words[dayIndex];
  document.getElementById('wod-word').textContent = wod.word;
  document.getElementById('wod-phonetic').textContent = wod.phonetic;
  document.getElementById('wod-type').textContent = wod.type;
  document.getElementById('wod-definition').textContent = wod.definition;
  document.getElementById('wod-example').innerHTML = `"${wod.example}"`;
}

// ===== Level Up =====
function updateLevelUpSection() {
  const cats = Object.keys(levelVocabulary[currentUser.level] || {});
  const completed = cats.filter(c => currentUser.completedCategories.includes(c));
  const allDone = cats.length > 0 && completed.length >= cats.length;
  const section = document.getElementById('level-up-section');
  const lvlIndex = LEVELS.findIndex(l => l.id === currentUser.level);
  const isMax = lvlIndex >= LEVELS.length - 1;
  if (allDone && !isMax) {
    section.style.display = 'block';
    const nextLvl = LEVELS[lvlIndex + 1];
    document.getElementById('level-up-next').textContent = `${nextLvl.icon} ${nextLvl.id} — ${nextLvl.name}`;
  } else if (isMax && allDone) {
    section.style.display = 'block';
    document.getElementById('level-up-next').textContent = '👑 You have mastered English!';
    document.getElementById('start-level-test-btn').textContent = 'You are at the top! 🎉';
    document.getElementById('start-level-test-btn').disabled = true;
  } else {
    section.style.display = 'none';
  }
}

let levelTestState = { questions: [], current: 0, score: 0, answered: false };

function startLevelUpTest() {
  const lvlIndex = LEVELS.findIndex(l => l.id === currentUser.level);
  if (lvlIndex >= LEVELS.length - 1) return;
  const nextLevel = LEVELS[lvlIndex + 1].id;
  const questions = levelQuizzes[nextLevel] || [];
  if (questions.length === 0) return;
  levelTestState = { questions: shuffleArray([...questions]), current: 0, score: 0, answered: false };
  document.getElementById('level-test-overlay').classList.add('active');
  renderLevelTestQuestion();
}

function renderLevelTestQuestion() {
  const { questions, current, score } = levelTestState;
  if (current >= questions.length) { finishLevelTest(); return; }
  const q = questions[current];
  const progress = (current / questions.length) * 100;
  document.getElementById('lt-progress-fill').style.width = `${progress}%`;
  document.getElementById('lt-progress-text').textContent = `${current + 1}/${questions.length}`;
  document.getElementById('lt-score-value').textContent = score;
  document.getElementById('lt-question').textContent = q.question;
  const opts = document.getElementById('lt-options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleLevelTestAnswer(i, btn));
    opts.appendChild(btn);
  });
  document.getElementById('lt-feedback').className = 'quiz-feedback';
  document.getElementById('lt-next').classList.remove('show');
  levelTestState.answered = false;
}

function handleLevelTestAnswer(idx, button) {
  if (levelTestState.answered) return;
  levelTestState.answered = true;
  const q = levelTestState.questions[levelTestState.current];
  const correct = idx === q.answer;
  const feedback = document.getElementById('lt-feedback');
  document.querySelectorAll('#lt-options .quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
  });
  if (correct) {
    levelTestState.score++;
    document.getElementById('lt-score-value').textContent = levelTestState.score;
    feedback.textContent = '🎉 Correct!';
    feedback.className = 'quiz-feedback correct show';
  } else {
    button.classList.add('wrong');
    feedback.textContent = `❌ Correct: "${q.options[q.answer]}"`;
    feedback.className = 'quiz-feedback wrong show';
  }
  document.getElementById('lt-next').classList.add('show');
}

function nextLevelTestQuestion() { levelTestState.current++; renderLevelTestQuestion(); }

function finishLevelTest() {
  const { score, questions } = levelTestState;
  const pct = Math.round((score / questions.length) * 100);
  const resultDiv = document.getElementById('lt-result');
  document.getElementById('lt-question').textContent = '';
  document.getElementById('lt-options').innerHTML = '';
  document.getElementById('lt-feedback').className = 'quiz-feedback';
  document.getElementById('lt-next').classList.remove('show');
  document.getElementById('lt-progress-fill').style.width = '100%';

  if (pct >= 70) {
    const lvlIndex = LEVELS.findIndex(l => l.id === currentUser.level);
    const nextLevel = LEVELS[lvlIndex + 1];
    currentUser.level = nextLevel.id;
    currentUser.completedCategories = [];
    saveUser();
    resultDiv.innerHTML = `
      <div class="placement-result-content show">
        <h3>🎉 Level Up!</h3>
        <div class="result-score">${score}/${questions.length}</div>
        <p>Welcome to <strong>${nextLevel.icon} ${nextLevel.id} — ${nextLevel.name}</strong>!</p>
        <button class="btn btn-primary" onclick="closeLevelTest(true)">Continue →</button>
      </div>`;
  } else {
    resultDiv.innerHTML = `
      <div class="placement-result-content show">
        <h3>📚 Keep Practicing!</h3>
        <div class="result-score">${score}/${questions.length}</div>
        <p>You need 70% to pass. Review your current level and try again!</p>
        <button class="btn btn-primary" onclick="closeLevelTest(false)">Back to Learning →</button>
      </div>`;
  }
  resultDiv.style.display = 'block';
}

function closeLevelTest(passed) {
  document.getElementById('level-test-overlay').classList.remove('active');
  document.getElementById('lt-result').style.display = 'none';
  document.getElementById('lt-result').innerHTML = '';
  if (passed) showApp();
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== Utility =====
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
