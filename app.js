// ===== Vocabulary Data =====
const vocabularyData = {
  animals: [
    { emoji: '🐶', word: 'Dog', phonetic: '/dɒɡ/', translation: 'Собака' },
    { emoji: '🐱', word: 'Cat', phonetic: '/kæt/', translation: 'Кошка' },
    { emoji: '🐦', word: 'Bird', phonetic: '/bɜːrd/', translation: 'Птица' },
    { emoji: '🐠', word: 'Fish', phonetic: '/fɪʃ/', translation: 'Рыба' },
    { emoji: '🐴', word: 'Horse', phonetic: '/hɔːrs/', translation: 'Лошадь' },
    { emoji: '🐰', word: 'Rabbit', phonetic: '/ˈræbɪt/', translation: 'Кролик' },
    { emoji: '🐸', word: 'Frog', phonetic: '/frɒɡ/', translation: 'Лягушка' },
    { emoji: '🦋', word: 'Butterfly', phonetic: '/ˈbʌtərflaɪ/', translation: 'Бабочка' },
    { emoji: '🐢', word: 'Turtle', phonetic: '/ˈtɜːrtl/', translation: 'Черепаха' },
    { emoji: '🦁', word: 'Lion', phonetic: '/ˈlaɪən/', translation: 'Лев' },
  ],
  food: [
    { emoji: '🍎', word: 'Apple', phonetic: '/ˈæpl/', translation: 'Яблоко' },
    { emoji: '🍞', word: 'Bread', phonetic: '/bred/', translation: 'Хлеб' },
    { emoji: '🧀', word: 'Cheese', phonetic: '/tʃiːz/', translation: 'Сыр' },
    { emoji: '🥛', word: 'Milk', phonetic: '/mɪlk/', translation: 'Молоко' },
    { emoji: '🍕', word: 'Pizza', phonetic: '/ˈpiːtsə/', translation: 'Пицца' },
    { emoji: '🍰', word: 'Cake', phonetic: '/keɪk/', translation: 'Торт' },
    { emoji: '🍌', word: 'Banana', phonetic: '/bəˈnænə/', translation: 'Банан' },
    { emoji: '🥕', word: 'Carrot', phonetic: '/ˈkærət/', translation: 'Морковь' },
    { emoji: '🍇', word: 'Grapes', phonetic: '/ɡreɪps/', translation: 'Виноград' },
    { emoji: '🍊', word: 'Orange', phonetic: '/ˈɒrɪndʒ/', translation: 'Апельсин' },
  ],
  colors: [
    { emoji: '🔴', word: 'Red', phonetic: '/red/', translation: 'Красный' },
    { emoji: '🔵', word: 'Blue', phonetic: '/bluː/', translation: 'Синий' },
    { emoji: '🟢', word: 'Green', phonetic: '/ɡriːn/', translation: 'Зелёный' },
    { emoji: '🟡', word: 'Yellow', phonetic: '/ˈjeloʊ/', translation: 'Жёлтый' },
    { emoji: '🟠', word: 'Orange', phonetic: '/ˈɒrɪndʒ/', translation: 'Оранжевый' },
    { emoji: '🟣', word: 'Purple', phonetic: '/ˈpɜːrpl/', translation: 'Фиолетовый' },
    { emoji: '⬛', word: 'Black', phonetic: '/blæk/', translation: 'Чёрный' },
    { emoji: '⬜', word: 'White', phonetic: '/waɪt/', translation: 'Белый' },
    { emoji: '🟤', word: 'Brown', phonetic: '/braʊn/', translation: 'Коричневый' },
    { emoji: '💗', word: 'Pink', phonetic: '/pɪŋk/', translation: 'Розовый' },
  ],
  family: [
    { emoji: '👨', word: 'Father', phonetic: '/ˈfɑːðər/', translation: 'Отец' },
    { emoji: '👩', word: 'Mother', phonetic: '/ˈmʌðər/', translation: 'Мать' },
    { emoji: '👦', word: 'Brother', phonetic: '/ˈbrʌðər/', translation: 'Брат' },
    { emoji: '👧', word: 'Sister', phonetic: '/ˈsɪstər/', translation: 'Сестра' },
    { emoji: '👴', word: 'Grandfather', phonetic: '/ˈɡræn(d)ˌfɑːðər/', translation: 'Дедушка' },
    { emoji: '👵', word: 'Grandmother', phonetic: '/ˈɡræn(d)ˌmʌðər/', translation: 'Бабушка' },
    { emoji: '👶', word: 'Baby', phonetic: '/ˈbeɪbi/', translation: 'Малыш' },
    { emoji: '🧑', word: 'Friend', phonetic: '/frend/', translation: 'Друг' },
    { emoji: '👫', word: 'Couple', phonetic: '/ˈkʌpl/', translation: 'Пара' },
    { emoji: '👪', word: 'Family', phonetic: '/ˈfæməli/', translation: 'Семья' },
  ],
  school: [
    { emoji: '📚', word: 'Book', phonetic: '/bʊk/', translation: 'Книга' },
    { emoji: '✏️', word: 'Pencil', phonetic: '/ˈpensl/', translation: 'Карандаш' },
    { emoji: '🎒', word: 'Backpack', phonetic: '/ˈbækpæk/', translation: 'Рюкзак' },
    { emoji: '📏', word: 'Ruler', phonetic: '/ˈruːlər/', translation: 'Линейка' },
    { emoji: '🖍️', word: 'Crayon', phonetic: '/ˈkreɪɒn/', translation: 'Мелок' },
    { emoji: '📓', word: 'Notebook', phonetic: '/ˈnoʊtbʊk/', translation: 'Тетрадь' },
    { emoji: '🏫', word: 'School', phonetic: '/skuːl/', translation: 'Школа' },
    { emoji: '👩‍🏫', word: 'Teacher', phonetic: '/ˈtiːtʃər/', translation: 'Учитель' },
    { emoji: '🖥️', word: 'Computer', phonetic: '/kəmˈpjuːtər/', translation: 'Компьютер' },
    { emoji: '📐', word: 'Triangle', phonetic: '/ˈtraɪæŋɡl/', translation: 'Треугольник' },
  ],
};

// ===== Quiz Data =====
const quizQuestions = [
  { question: 'What is the English word for "Яблоко"?', options: ['Banana', 'Apple', 'Orange', 'Grapes'], answer: 1 },
  { question: 'Choose the correct translation of "Cat":', options: ['Собака', 'Птица', 'Кошка', 'Рыба'], answer: 2 },
  { question: 'How do you say "Синий" in English?', options: ['Red', 'Green', 'Yellow', 'Blue'], answer: 3 },
  { question: 'What does "Brother" mean?', options: ['Сестра', 'Брат', 'Отец', 'Мать'], answer: 1 },
  { question: 'Choose the right word: "I ___ a student."', options: ['is', 'am', 'are', 'be'], answer: 1 },
  { question: 'Translate "Книга" to English:', options: ['Pencil', 'Book', 'Ruler', 'Notebook'], answer: 1 },
  { question: 'What color is a banana? 🍌', options: ['Red', 'Blue', 'Yellow', 'Green'], answer: 2 },
  { question: '"She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], answer: 1 },
  { question: 'What animal says "Meow"?', options: ['Dog', 'Bird', 'Fish', 'Cat'], answer: 3 },
  { question: 'Which word means "Учитель"?', options: ['School', 'Student', 'Teacher', 'Pencil'], answer: 2 },
];

// ===== Word of the Day Data =====
const wordsOfTheDay = [
  { word: 'Wonderful', phonetic: '/ˈwʌndərfl/', type: 'adjective', definition: 'Extremely good; marvellous.', example: 'The weather today is <strong>wonderful</strong>!' },
  { word: 'Adventure', phonetic: '/ədˈventʃər/', type: 'noun', definition: 'An unusual, exciting, and daring experience.', example: 'Learning English is a great <strong>adventure</strong>.' },
  { word: 'Discover', phonetic: '/dɪˈskʌvər/', type: 'verb', definition: 'To find or learn something for the first time.', example: 'Let\'s <strong>discover</strong> new words together!' },
  { word: 'Brilliant', phonetic: '/ˈbrɪliənt/', type: 'adjective', definition: 'Exceptionally clever or talented.', example: 'You are a <strong>brilliant</strong> student!' },
  { word: 'Courage', phonetic: '/ˈkɜːrɪdʒ/', type: 'noun', definition: 'The ability to do something that frightens you.', example: 'It takes <strong>courage</strong> to speak a new language.' },
  { word: 'Imagine', phonetic: '/ɪˈmædʒɪn/', type: 'verb', definition: 'To form a mental image of something.', example: '<strong>Imagine</strong> you can speak English fluently!' },
  { word: 'Grateful', phonetic: '/ˈɡreɪtfl/', type: 'adjective', definition: 'Feeling or showing thanks.', example: 'I am <strong>grateful</strong> for this opportunity.' },
];

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initVocabulary();
  initQuiz();
  initWordOfDay();
  initScrollReveal();
  initSpeechSynthesis();
});

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

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.classList.remove('open');
      }
    });
  });
}

// ===== Vocabulary =====
function initVocabulary() {
  const tabs = document.querySelectorAll('.vocab-tab');
  const grid = document.getElementById('vocab-grid');

  // Load default category
  renderVocab('animals');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderVocab(tab.dataset.category);
    });
  });
}

function renderVocab(category) {
  const grid = document.getElementById('vocab-grid');
  const words = vocabularyData[category] || [];

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
  }, 100);
}

// ===== Speech Synthesis =====
function initSpeechSynthesis() {
  // Pre-warm the speech synthesis
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }
}

function speakWord(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;

    // Try to find an English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;

    window.speechSynthesis.speak(utterance);
  }
}

// ===== Quiz =====
let quizState = {
  currentQuestion: 0,
  score: 0,
  answered: false,
  questions: [],
};

function initQuiz() {
  quizState.questions = shuffleArray([...quizQuestions]).slice(0, 5);
  quizState.currentQuestion = 0;
  quizState.score = 0;
  quizState.answered = false;

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { currentQuestion, questions, score } = quizState;

  if (currentQuestion >= questions.length) {
    showQuizResult();
    return;
  }

  const q = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  document.getElementById('quiz-progress-fill').style.width = `${progress}%`;
  document.getElementById('quiz-progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
  document.getElementById('quiz-score-value').textContent = score;
  document.getElementById('quiz-question').textContent = q.question;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = option;
    btn.addEventListener('click', () => handleAnswer(index, btn));
    optionsContainer.appendChild(btn);
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
  const allButtons = document.querySelectorAll('.quiz-option');

  allButtons.forEach((btn, i) => {
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
    feedback.textContent = `❌ Not quite! The correct answer is "${q.options[q.answer]}".`;
    feedback.className = 'quiz-feedback wrong show';
  }

  document.getElementById('quiz-next').classList.add('show');
}

function nextQuestion() {
  quizState.currentQuestion++;
  renderQuizQuestion();
}

function showQuizResult() {
  const { score, questions } = quizState;
  const percentage = Math.round((score / questions.length) * 100);

  document.getElementById('quiz-options').innerHTML = '';
  document.getElementById('quiz-question').textContent = '';
  document.getElementById('quiz-feedback').classList.remove('show');
  document.getElementById('quiz-next').classList.remove('show');
  document.getElementById('quiz-progress-fill').style.width = '100%';

  const resultContainer = document.getElementById('quiz-result-container');
  let message;
  if (percentage === 100) message = '🏆 Perfect score! You\'re a star!';
  else if (percentage >= 80) message = '🌟 Excellent work! Almost perfect!';
  else if (percentage >= 60) message = '👍 Good job! Keep practicing!';
  else message = '💪 Don\'t give up! Practice makes perfect!';

  document.getElementById('quiz-result-score').textContent = `${score}/${questions.length}`;
  document.getElementById('quiz-result-message').textContent = message;
  resultContainer.classList.add('show');
}

function restartQuiz() {
  initQuiz();
}

// ===== Word of the Day =====
function initWordOfDay() {
  const dayIndex = new Date().getDate() % wordsOfTheDay.length;
  const wod = wordsOfTheDay[dayIndex];

  document.getElementById('wod-word').textContent = wod.word;
  document.getElementById('wod-phonetic').textContent = wod.phonetic;
  document.getElementById('wod-type').textContent = wod.type;
  document.getElementById('wod-definition').textContent = wod.definition;
  document.getElementById('wod-example').innerHTML = `"${wod.example}"`;
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
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
