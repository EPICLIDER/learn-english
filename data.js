// ===== CEFR Level Definitions =====
const LEVELS = [
    { id: 'A0', name: 'Absolute Beginner', icon: '🌱', color: '#34d399', desc: 'Zero English knowledge' },
    { id: 'A1', name: 'Beginner', icon: '🌿', color: '#4facfe', desc: 'Basic phrases & greetings' },
    { id: 'A2', name: 'Elementary', icon: '🌳', color: '#a855f7', desc: 'Simple everyday sentences' },
    { id: 'B1', name: 'Intermediate', icon: '⭐', color: '#f472b6', desc: 'Everyday topics & travel' },
    { id: 'B2', name: 'Upper Intermediate', icon: '🔥', color: '#fb923c', desc: 'Complex discussions' },
    { id: 'C1', name: 'Advanced', icon: '💎', color: '#fbbf24', desc: 'Fluent & flexible language' },
    { id: 'C2', name: 'Proficiency', icon: '👑', color: '#ef4444', desc: 'Near-native mastery' },
];

// ===== Vocabulary by Level =====
const levelVocabulary = {
    A0: {
        greetings: [
            { emoji: '👋', word: 'Hello', phonetic: '/həˈloʊ/', translation: 'Привет', translation_uz: 'Salom' },
            { emoji: '😊', word: 'Yes', phonetic: '/jes/', translation: 'Да', translation_uz: 'Ha' },
            { emoji: '😐', word: 'No', phonetic: '/noʊ/', translation: 'Нет', translation_uz: 'Yo\'q' },
            { emoji: '🙏', word: 'Please', phonetic: '/pliːz/', translation: 'Пожалуйста', translation_uz: 'Iltimos' },
            { emoji: '😄', word: 'Thanks', phonetic: '/θæŋks/', translation: 'Спасибо', translation_uz: 'Rahmat' },
            { emoji: '👋', word: 'Bye', phonetic: '/baɪ/', translation: 'Пока', translation_uz: 'Xayr' },
        ],
        numbers: [
            { emoji: '1️⃣', word: 'One', phonetic: '/wʌn/', translation: 'Один', translation_uz: 'Bir' },
            { emoji: '2️⃣', word: 'Two', phonetic: '/tuː/', translation: 'Два', translation_uz: 'Ikki' },
            { emoji: '3️⃣', word: 'Three', phonetic: '/θriː/', translation: 'Три', translation_uz: 'Uch' },
            { emoji: '4️⃣', word: 'Four', phonetic: '/fɔːr/', translation: 'Четыре', translation_uz: 'To\'rt' },
            { emoji: '5️⃣', word: 'Five', phonetic: '/faɪv/', translation: 'Пять', translation_uz: 'Besh' },
            { emoji: '🔟', word: 'Ten', phonetic: '/ten/', translation: 'Десять', translation_uz: 'O\'n' },
        ],
        colors: [
            { emoji: '🔴', word: 'Red', phonetic: '/red/', translation: 'Красный', translation_uz: 'Qizil' },
            { emoji: '🔵', word: 'Blue', phonetic: '/bluː/', translation: 'Синий', translation_uz: 'Ko\'k' },
            { emoji: '🟢', word: 'Green', phonetic: '/ɡriːn/', translation: 'Зелёный', translation_uz: 'Yashil' },
            { emoji: '⬛', word: 'Black', phonetic: '/blæk/', translation: 'Чёрный', translation_uz: 'Qora' },
            { emoji: '⬜', word: 'White', phonetic: '/waɪt/', translation: 'Белый', translation_uz: 'Oq' },
            { emoji: '🟡', word: 'Yellow', phonetic: '/ˈjeloʊ/', translation: 'Жёлтый', translation_uz: 'Sariq' },
        ],
    },
    A1: {
        animals: [
            { emoji: '🐶', word: 'Dog', phonetic: '/dɒɡ/', translation: 'Собака', translation_uz: 'It' },
            { emoji: '🐱', word: 'Cat', phonetic: '/kæt/', translation: 'Кошка', translation_uz: 'Mushuk' },
            { emoji: '🐦', word: 'Bird', phonetic: '/bɜːrd/', translation: 'Птица', translation_uz: 'Qush' },
            { emoji: '🐠', word: 'Fish', phonetic: '/fɪʃ/', translation: 'Рыба', translation_uz: 'Baliq' },
            { emoji: '🐴', word: 'Horse', phonetic: '/hɔːrs/', translation: 'Лошадь', translation_uz: 'Ot' },
            { emoji: '🐰', word: 'Rabbit', phonetic: '/ˈræbɪt/', translation: 'Кролик', translation_uz: 'Quyon' },
        ],
        food: [
            { emoji: '🍎', word: 'Apple', phonetic: '/ˈæpl/', translation: 'Яблоко', translation_uz: 'Olma' },
            { emoji: '🍞', word: 'Bread', phonetic: '/bred/', translation: 'Хлеб', translation_uz: 'Non' },
            { emoji: '🥛', word: 'Milk', phonetic: '/mɪlk/', translation: 'Молоко', translation_uz: 'Sut' },
            { emoji: '🍕', word: 'Pizza', phonetic: '/ˈpiːtsə/', translation: 'Пицца', translation_uz: 'Pitsa' },
            { emoji: '🍌', word: 'Banana', phonetic: '/bəˈnænə/', translation: 'Банан', translation_uz: 'Banan' },
            { emoji: '🧀', word: 'Cheese', phonetic: '/tʃiːz/', translation: 'Сыр', translation_uz: 'Pishloq' },
        ],
        family: [
            { emoji: '👨', word: 'Father', phonetic: '/ˈfɑːðər/', translation: 'Отец', translation_uz: 'Ota' },
            { emoji: '👩', word: 'Mother', phonetic: '/ˈmʌðər/', translation: 'Мать', translation_uz: 'Ona' },
            { emoji: '👦', word: 'Brother', phonetic: '/ˈbrʌðər/', translation: 'Брат', translation_uz: 'Aka/Uka' },
            { emoji: '👧', word: 'Sister', phonetic: '/ˈsɪstər/', translation: 'Сестра', translation_uz: 'Opa/Singil' },
            { emoji: '👶', word: 'Baby', phonetic: '/ˈbeɪbi/', translation: 'Малыш', translation_uz: 'Chaqaloq' },
            { emoji: '👪', word: 'Family', phonetic: '/ˈfæməli/', translation: 'Семья', translation_uz: 'Oila' },
        ],
    },
    A2: {
        daily: [
            { emoji: '🏠', word: 'House', phonetic: '/haʊs/', translation: 'Дом', translation_uz: 'Uy' },
            { emoji: '🚗', word: 'Car', phonetic: '/kɑːr/', translation: 'Машина', translation_uz: 'Mashina' },
            { emoji: '📱', word: 'Phone', phonetic: '/foʊn/', translation: 'Телефон', translation_uz: 'Telefon' },
            { emoji: '🛏️', word: 'Bed', phonetic: '/bed/', translation: 'Кровать', translation_uz: 'Karavot' },
            { emoji: '🪑', word: 'Chair', phonetic: '/tʃer/', translation: 'Стул', translation_uz: 'Stul' },
            { emoji: '🚪', word: 'Door', phonetic: '/dɔːr/', translation: 'Дверь', translation_uz: 'Eshik' },
        ],
        weather: [
            { emoji: '☀️', word: 'Sunny', phonetic: '/ˈsʌni/', translation: 'Солнечно', translation_uz: 'Quyoshli' },
            { emoji: '🌧️', word: 'Rainy', phonetic: '/ˈreɪni/', translation: 'Дождливо', translation_uz: 'Yomg\'irli' },
            { emoji: '❄️', word: 'Cold', phonetic: '/koʊld/', translation: 'Холодно', translation_uz: 'Sovuq' },
            { emoji: '🌡️', word: 'Hot', phonetic: '/hɑːt/', translation: 'Жарко', translation_uz: 'Issiq' },
            { emoji: '💨', word: 'Windy', phonetic: '/ˈwɪndi/', translation: 'Ветрено', translation_uz: 'Shamolli' },
            { emoji: '☁️', word: 'Cloudy', phonetic: '/ˈklaʊdi/', translation: 'Облачно', translation_uz: 'Bulutli' },
        ],
        school: [
            { emoji: '📚', word: 'Book', phonetic: '/bʊk/', translation: 'Книга', translation_uz: 'Kitob' },
            { emoji: '✏️', word: 'Pencil', phonetic: '/ˈpensl/', translation: 'Карандаш', translation_uz: 'Qalam' },
            { emoji: '🎒', word: 'Backpack', phonetic: '/ˈbækpæk/', translation: 'Рюкзак', translation_uz: 'Ryukzak' },
            { emoji: '👩‍🏫', word: 'Teacher', phonetic: '/ˈtiːtʃər/', translation: 'Учитель', translation_uz: 'O\'qituvchi' },
            { emoji: '🏫', word: 'School', phonetic: '/skuːl/', translation: 'Школа', translation_uz: 'Maktab' },
            { emoji: '📓', word: 'Notebook', phonetic: '/ˈnoʊtbʊk/', translation: 'Тетрадь', translation_uz: 'Daftar' },
        ],
    },
    B1: {
        travel: [
            { emoji: '✈️', word: 'Flight', phonetic: '/flaɪt/', translation: 'Рейс', translation_uz: 'Parvoz' },
            { emoji: '🏨', word: 'Hotel', phonetic: '/hoʊˈtel/', translation: 'Гостиница', translation_uz: 'Mehmonxona' },
            { emoji: '🗺️', word: 'Journey', phonetic: '/ˈdʒɜːrni/', translation: 'Путешествие', translation_uz: 'Sayohat' },
            { emoji: '🧳', word: 'Luggage', phonetic: '/ˈlʌɡɪdʒ/', translation: 'Багаж', translation_uz: 'Yuk' },
            { emoji: '🎫', word: 'Ticket', phonetic: '/ˈtɪkɪt/', translation: 'Билет', translation_uz: 'Chipta' },
            { emoji: '🛂', word: 'Passport', phonetic: '/ˈpæspɔːrt/', translation: 'Паспорт', translation_uz: 'Pasport' },
        ],
        health: [
            { emoji: '🏥', word: 'Hospital', phonetic: '/ˈhɑːspɪtl/', translation: 'Больница', translation_uz: 'Kasalxona' },
            { emoji: '💊', word: 'Medicine', phonetic: '/ˈmedɪsɪn/', translation: 'Лекарство', translation_uz: 'Dori' },
            { emoji: '🩺', word: 'Doctor', phonetic: '/ˈdɑːktər/', translation: 'Врач', translation_uz: 'Shifokor' },
            { emoji: '🤒', word: 'Fever', phonetic: '/ˈfiːvər/', translation: 'Жар', translation_uz: 'Isitma' },
            { emoji: '💪', word: 'Exercise', phonetic: '/ˈeksərsaɪz/', translation: 'Упражнение', translation_uz: 'Mashq' },
            { emoji: '🥗', word: 'Diet', phonetic: '/ˈdaɪət/', translation: 'Диета', translation_uz: 'Parhez' },
        ],
        work: [
            { emoji: '💼', word: 'Office', phonetic: '/ˈɑːfɪs/', translation: 'Офис', translation_uz: 'Ofis' },
            { emoji: '📧', word: 'Email', phonetic: '/ˈiːmeɪl/', translation: 'Электронная почта', translation_uz: 'Elektron pochta' },
            { emoji: '📊', word: 'Report', phonetic: '/rɪˈpɔːrt/', translation: 'Отчёт', translation_uz: 'Hisobot' },
            { emoji: '🤝', word: 'Meeting', phonetic: '/ˈmiːtɪŋ/', translation: 'Встреча', translation_uz: 'Uchrashuv' },
            { emoji: '📅', word: 'Schedule', phonetic: '/ˈskedʒuːl/', translation: 'Расписание', translation_uz: 'Jadval' },
            { emoji: '💰', word: 'Salary', phonetic: '/ˈsæləri/', translation: 'Зарплата', translation_uz: 'Maosh' },
        ],
    },
    B2: {
        emotions: [
            { emoji: '😤', word: 'Frustrated', phonetic: '/ˈfrʌstreɪtɪd/', translation: 'Разочарованный', translation_uz: 'Hafsalasi pir' },
            { emoji: '😌', word: 'Relieved', phonetic: '/rɪˈliːvd/', translation: 'С облегчением', translation_uz: 'Yengillashgan' },
            { emoji: '🤔', word: 'Curious', phonetic: '/ˈkjʊriəs/', translation: 'Любопытный', translation_uz: 'Qiziquvchan' },
            { emoji: '😰', word: 'Anxious', phonetic: '/ˈæŋkʃəs/', translation: 'Тревожный', translation_uz: 'Tashvishli' },
            { emoji: '🥱', word: 'Exhausted', phonetic: '/ɪɡˈzɔːstɪd/', translation: 'Измученный', translation_uz: 'Holdan toygan' },
            { emoji: '🤩', word: 'Thrilled', phonetic: '/θrɪld/', translation: 'В восторге', translation_uz: 'Hayajonlangan' },
        ],
        science: [
            { emoji: '🔬', word: 'Research', phonetic: '/rɪˈsɜːrtʃ/', translation: 'Исследование', translation_uz: 'Tadqiqot' },
            { emoji: '🧪', word: 'Experiment', phonetic: '/ɪkˈsperɪmənt/', translation: 'Эксперимент', translation_uz: 'Tajriba' },
            { emoji: '📈', word: 'Analysis', phonetic: '/əˈnæləsɪs/', translation: 'Анализ', translation_uz: 'Tahlil' },
            { emoji: '💡', word: 'Hypothesis', phonetic: '/haɪˈpɑːθəsɪs/', translation: 'Гипотеза', translation_uz: 'Gipoteza' },
            { emoji: '🌍', word: 'Environment', phonetic: '/ɪnˈvaɪrənmənt/', translation: 'Окружающая среда', translation_uz: 'Atrof-muhit' },
            { emoji: '⚡', word: 'Energy', phonetic: '/ˈenərdʒi/', translation: 'Энергия', translation_uz: 'Energiya' },
        ],
        media: [
            { emoji: '📰', word: 'Headline', phonetic: '/ˈhedlaɪn/', translation: 'Заголовок', translation_uz: 'Sarlavha' },
            { emoji: '🎬', word: 'Documentary', phonetic: '/ˌdɑːkjuˈmentri/', translation: 'Документальный', translation_uz: 'Hujjatli film' },
            { emoji: '📡', word: 'Broadcast', phonetic: '/ˈbrɔːdkæst/', translation: 'Трансляция', translation_uz: 'Translyatsiya' },
            { emoji: '🗞️', word: 'Article', phonetic: '/ˈɑːrtɪkl/', translation: 'Статья', translation_uz: 'Maqola' },
            { emoji: '🎙️', word: 'Interview', phonetic: '/ˈɪntərvjuː/', translation: 'Интервью', translation_uz: 'Intervyu' },
            { emoji: '📝', word: 'Editorial', phonetic: '/ˌediˈtɔːriəl/', translation: 'Редакционная', translation_uz: 'Tahririy' },
        ],
    },
    C1: {
        academic: [
            { emoji: '📖', word: 'Dissertation', phonetic: '/ˌdɪsərˈteɪʃn/', translation: 'Диссертация', translation_uz: 'Dissertatsiya' },
            { emoji: '🎓', word: 'Scholarship', phonetic: '/ˈskɑːlərʃɪp/', translation: 'Стипендия', translation_uz: 'Stipendiya' },
            { emoji: '📑', word: 'Thesis', phonetic: '/ˈθiːsɪs/', translation: 'Тезис', translation_uz: 'Tezis' },
            { emoji: '🏛️', word: 'Curriculum', phonetic: '/kəˈrɪkjələm/', translation: 'Учебная программа', translation_uz: 'O\'quv dasturi' },
            { emoji: '📋', word: 'Assessment', phonetic: '/əˈsesmənt/', translation: 'Оценка', translation_uz: 'Baholash' },
            { emoji: '🔖', word: 'Annotation', phonetic: '/ˌænəˈteɪʃn/', translation: 'Аннотация', translation_uz: 'Izoh' },
        ],
        business: [
            { emoji: '📈', word: 'Revenue', phonetic: '/ˈrevənuː/', translation: 'Доход', translation_uz: 'Daromad' },
            { emoji: '🏦', word: 'Investment', phonetic: '/ɪnˈvestmənt/', translation: 'Инвестиция', translation_uz: 'Investitsiya' },
            { emoji: '📊', word: 'Stakeholder', phonetic: '/ˈsteɪkhoʊldər/', translation: 'Заинтересованная сторона', translation_uz: 'Manfaatdor tomon' },
            { emoji: '⚖️', word: 'Negotiation', phonetic: '/nɪˌɡoʊʃiˈeɪʃn/', translation: 'Переговоры', translation_uz: 'Muzokaralar' },
            { emoji: '📃', word: 'Acquisition', phonetic: '/ˌækwɪˈzɪʃn/', translation: 'Приобретение', translation_uz: 'Sotib olish' },
            { emoji: '🔄', word: 'Restructuring', phonetic: '/ˌriːˈstrʌktʃərɪŋ/', translation: 'Реструктуризация', translation_uz: 'Qayta tuzilish' },
        ],
        idioms: [
            { emoji: '🌧️', word: 'Under the weather', phonetic: '/ˌʌndər ðə ˈweðər/', translation: 'Нездоровиться', translation_uz: 'Kasal bo\'lmoq' },
            { emoji: '💡', word: 'Think outside the box', phonetic: '', translation: 'Мыслить нестандартно', translation_uz: 'Nostandart fikrlash' },
            { emoji: '🎯', word: 'Hit the nail on the head', phonetic: '', translation: 'Попасть в точку', translation_uz: 'Aniq aytmoq' },
            { emoji: '⏰', word: 'Better late than never', phonetic: '', translation: 'Лучше поздно, чем никогда', translation_uz: 'Kechdan hech yo\'q yaxshi' },
            { emoji: '🔥', word: 'Burn the midnight oil', phonetic: '', translation: 'Работать допоздна', translation_uz: 'Kechgacha ishlash' },
            { emoji: '🌊', word: 'Go with the flow', phonetic: '', translation: 'Плыть по течению', translation_uz: 'Oqimga ergashmoq' },
        ],
    },
    C2: {
        literature: [
            { emoji: '📜', word: 'Eloquence', phonetic: '/ˈeləkwəns/', translation: 'Красноречие', translation_uz: 'Notiqlik' },
            { emoji: '🖋️', word: 'Nuance', phonetic: '/ˈnuːɑːns/', translation: 'Нюанс', translation_uz: 'Noziklik' },
            { emoji: '🎭', word: 'Ambiguity', phonetic: '/ˌæmbɪˈɡjuːəti/', translation: 'Двусмысленность', translation_uz: 'Ikki ma\'nolilik' },
            { emoji: '📚', word: 'Allegory', phonetic: '/ˈæləɡɔːri/', translation: 'Аллегория', translation_uz: 'Allegoriya' },
            { emoji: '✍️', word: 'Rhetoric', phonetic: '/ˈretərɪk/', translation: 'Риторика', translation_uz: 'Ritorika' },
            { emoji: '🔮', word: 'Paradox', phonetic: '/ˈpærədɑːks/', translation: 'Парадокс', translation_uz: 'Paradoks' },
        ],
        philosophy: [
            { emoji: '🧠', word: 'Epistemology', phonetic: '/ɪˌʀɪstəˈmɑːlədʒi/', translation: 'Эпистемология', translation_uz: 'Epistemologiya' },
            { emoji: '⚖️', word: 'Utilitarianism', phonetic: '/ˌjuːtɪlɪˈteriənɪzəm/', translation: 'Утилитаризм', translation_uz: 'Utilitarizm' },
            { emoji: '💭', word: 'Existentialism', phonetic: '/ˌeɡzɪˈstenʃəlɪzəm/', translation: 'Экзистенциализм', translation_uz: 'Ekzistensializm' },
            { emoji: '🔄', word: 'Dialectic', phonetic: '/ˌdaɪəˈlektɪk/', translation: 'Диалектика', translation_uz: 'Dialektika' },
            { emoji: '🌌', word: 'Metaphysics', phonetic: '/ˌmetəˈfɪzɪks/', translation: 'Метафизика', translation_uz: 'Metafizika' },
            { emoji: '🤝', word: 'Altruism', phonetic: '/ˈæltruɪzəm/', translation: 'Альтруизм', translation_uz: 'Altruizm' },
        ],
        advanced: [
            { emoji: '🌀', word: 'Quintessential', phonetic: '/ˌkwɪntɪˈsenʃl/', translation: 'Типичный', translation_uz: 'Eng tipik' },
            { emoji: '🎪', word: 'Serendipity', phonetic: '/ˌserənˈdɪpəti/', translation: 'Случайная удача', translation_uz: 'Tasodifiy omad' },
            { emoji: '🌈', word: 'Ephemeral', phonetic: '/ɪˈfemərəl/', translation: 'Мимолётный', translation_uz: 'O\'tkinchi' },
            { emoji: '🗣️', word: 'Loquacious', phonetic: '/loʊˈkweɪʃəs/', translation: 'Словоохотливый', translation_uz: 'Serso\'z' },
            { emoji: '😊', word: 'Sanguine', phonetic: '/ˈsæŋɡwɪn/', translation: 'Оптимистичный', translation_uz: 'Nikbin' },
            { emoji: '🤫', word: 'Clandestine', phonetic: '/klænˈdestɪn/', translation: 'Тайный', translation_uz: 'Yashirin' },
        ],
    },
};

// ===== Quiz Questions by Level =====
const levelQuizzes = {
    A0: [
        { question: 'What does "Hello" mean?', options: ['Пока', 'Привет', 'Спасибо', 'Да'], answer: 1 },
        { question: 'How do you say "Да" in English?', options: ['No', 'Please', 'Yes', 'Thanks'], answer: 2 },
        { question: 'What color is 🔴?', options: ['Blue', 'Green', 'Red', 'Yellow'], answer: 2 },
        { question: 'What number is "Three"?', options: ['1', '2', '3', '5'], answer: 2 },
        { question: 'Translate "Нет" to English:', options: ['Yes', 'No', 'Bye', 'Please'], answer: 1 },
        { question: 'What does "Five" mean?', options: ['Три', 'Четыре', 'Пять', 'Десять'], answer: 2 },
        { question: 'What color is 🔵?', options: ['Red', 'Blue', 'Green', 'Black'], answer: 1 },
        { question: '"Спасибо" in English is:', options: ['Please', 'Sorry', 'Thanks', 'Hello'], answer: 2 },
        { question: 'What does "Bye" mean?', options: ['Привет', 'Пока', 'Да', 'Нет'], answer: 1 },
        { question: 'What number comes after "Four"?', options: ['Three', 'Five', 'Two', 'Ten'], answer: 1 },
    ],
    A1: [
        { question: 'What is "Яблоко" in English?', options: ['Banana', 'Apple', 'Orange', 'Grapes'], answer: 1 },
        { question: 'Choose the translation of "Cat":', options: ['Собака', 'Птица', 'Кошка', 'Рыба'], answer: 2 },
        { question: 'What does "Brother" mean?', options: ['Сестра', 'Брат', 'Отец', 'Мать'], answer: 1 },
        { question: 'Translate "Книга" to English:', options: ['Pencil', 'Book', 'Ruler', 'Notebook'], answer: 1 },
        { question: '"Молоко" in English is:', options: ['Bread', 'Cheese', 'Milk', 'Water'], answer: 2 },
        { question: 'What animal says "Meow"?', options: ['Dog', 'Bird', 'Fish', 'Cat'], answer: 3 },
        { question: 'What is "Отец" in English?', options: ['Mother', 'Sister', 'Father', 'Brother'], answer: 2 },
        { question: '"Horse" means:', options: ['Кролик', 'Лошадь', 'Птица', 'Рыба'], answer: 1 },
        { question: 'What is "Хлеб"?', options: ['Bread', 'Milk', 'Apple', 'Pizza'], answer: 0 },
        { question: '"Семья" translates to:', options: ['Sister', 'Baby', 'Friend', 'Family'], answer: 3 },
    ],
    A2: [
        { question: '"She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], answer: 1 },
        { question: 'What is "Погода" in English?', options: ['Weather', 'Water', 'Window', 'Winter'], answer: 0 },
        { question: 'Choose the right: "I ___ a student."', options: ['is', 'am', 'are', 'be'], answer: 1 },
        { question: '"Учитель" in English:', options: ['Student', 'Teacher', 'Doctor', 'Driver'], answer: 1 },
        { question: 'It is very ☀️ today. It is ___:', options: ['Rainy', 'Cloudy', 'Sunny', 'Cold'], answer: 2 },
        { question: '"They ___ playing football."', options: ['is', 'am', 'are', 'be'], answer: 2 },
        { question: '"Машина" means:', options: ['Bus', 'Train', 'Car', 'Bike'], answer: 2 },
        { question: 'The opposite of "Hot" is:', options: ['Warm', 'Cold', 'Windy', 'Sunny'], answer: 1 },
        { question: '"He ___ a book every evening."', options: ['read', 'reads', 'reading', 'readed'], answer: 1 },
        { question: '"Рюкзак" translates to:', options: ['Book', 'Pencil', 'Backpack', 'School'], answer: 2 },
    ],
    B1: [
        { question: '"I have been ___ for 2 hours."', options: ['wait', 'waited', 'waiting', 'waits'], answer: 2 },
        { question: '"If I ___ rich, I would travel."', options: ['am', 'was', 'were', 'be'], answer: 2 },
        { question: '"Путешествие" in English:', options: ['Travel', 'Journey', 'Trip', 'All of these'], answer: 3 },
        { question: '"She asked me ___ I was."', options: ['how', 'what', 'where', 'which'], answer: 0 },
        { question: '"Лекарство" means:', options: ['Doctor', 'Hospital', 'Medicine', 'Health'], answer: 2 },
        { question: '"The meeting ___ cancelled."', options: ['is', 'was', 'were', 'has'], answer: 1 },
        { question: '"I used to ___ early."', options: ['waking', 'woke', 'wake', 'waken'], answer: 2 },
        { question: '"Зарплата" translates to:', options: ['Money', 'Salary', 'Price', 'Cost'], answer: 1 },
        { question: '"He suggested ___ a taxi."', options: ['take', 'taking', 'to take', 'took'], answer: 1 },
        { question: '"Багаж" in English is:', options: ['Baggage', 'Luggage', 'Both A and B', 'Suitcase'], answer: 2 },
    ],
    B2: [
        { question: '"Had I known, I ___ differently."', options: ['would act', 'would have acted', 'acted', 'will act'], answer: 1 },
        { question: '"Гипотеза" means:', options: ['Theory', 'Hypothesis', 'Idea', 'Fact'], answer: 1 },
        { question: '"The results ___ by the team."', options: ['analyzed', 'were analyzed', 'analyzing', 'have analyzing'], answer: 1 },
        { question: '"She is ___ of starting a business."', options: ['capable', 'able', 'enable', 'possible'], answer: 0 },
        { question: '"Окружающая среда" is:', options: ['Nature', 'Environment', 'Climate', 'Weather'], answer: 1 },
        { question: '"Not only ___ he smart, but also kind."', options: ['is', 'was', 'does', 'has'], answer: 0 },
        { question: '"Despite ___ hard, he failed."', options: ['work', 'working', 'worked', 'works'], answer: 1 },
        { question: '"Заголовок" translates to:', options: ['Article', 'Headline', 'Title', 'Subtitle'], answer: 1 },
        { question: '"By next year, I ___ graduated."', options: ['will', 'will have', 'would', 'would have'], answer: 1 },
        { question: '"Исследование" means:', options: ['Experiment', 'Research', 'Study', 'All of these'], answer: 3 },
    ],
    C1: [
        { question: '"Scarcely had he arrived ___ it started raining."', options: ['when', 'than', 'then', 'that'], answer: 0 },
        { question: '"Реструктуризация" means:', options: ['Rebuilding', 'Restructuring', 'Renovation', 'Restoration'], answer: 1 },
        { question: '"The CEO, ___ tenure was brief, resigned."', options: ['who', 'whose', 'whom', 'which'], answer: 1 },
        { question: '"Under the weather" means:', options: ['Rainy day', 'Feeling ill', 'Being sad', 'Cold outside'], answer: 1 },
        { question: '"Стипендия" translates to:', options: ['Stipend', 'Scholarship', 'Grant', 'Salary'], answer: 1 },
        { question: '"Were it not for you, I ___."', options: ['would fail', 'would have failed', 'failed', 'will fail'], answer: 1 },
        { question: '"Hit the nail on the head" means:', options: ['Use a hammer', 'Be exactly right', 'Make a mistake', 'Start working'], answer: 1 },
        { question: '"Переговоры" is:', options: ['Discussion', 'Negotiation', 'Conversation', 'Debate'], answer: 1 },
        { question: '"She prides herself ___ her work ethic."', options: ['in', 'at', 'on', 'for'], answer: 2 },
        { question: '"Burn the midnight oil" means:', options: ['Cook late', 'Work very late', 'Waste energy', 'Light a fire'], answer: 1 },
    ],
    C2: [
        { question: '"The quintessential example of..." means:', options: ['The worst', 'The most typical', 'The rarest', 'The newest'], answer: 1 },
        { question: '"Красноречие" translates to:', options: ['Rhetoric', 'Eloquence', 'Speech', 'Language'], answer: 1 },
        { question: '"Serendipity" refers to:', options: ['Bad luck', 'Hard work', 'Fortunate accident', 'Destiny'], answer: 2 },
        { question: '"Эпистемология" is:', options: ['Study of beauty', 'Study of knowledge', 'Study of language', 'Study of mind'], answer: 1 },
        { question: '"An ephemeral moment" is:', options: ['Eternal', 'Fleeting', 'Important', 'Forgotten'], answer: 1 },
        { question: '"Loquacious" describes someone who is:', options: ['Quiet', 'Talkative', 'Angry', 'Smart'], answer: 1 },
        { question: '"Утилитаризм" means:', options: ['Utilitarianism', 'Materialism', 'Pragmatism', 'Capitalism'], answer: 0 },
        { question: '"A clandestine operation" is:', options: ['Public', 'Legal', 'Secret', 'Military'], answer: 2 },
        { question: '"Dialectic" refers to:', options: ['A dialect', 'Logical reasoning through dialogue', 'A type of speech', 'An accent'], answer: 1 },
        { question: '"Sanguine" means:', options: ['Pessimistic', 'Angry', 'Optimistic', 'Neutral'], answer: 2 },
    ],
};

// ===== Grammar Tips by Level =====
const levelGrammar = {
    A0: [
        { title: '📌 Personal Pronouns', tag: 'A0', desc: 'I, you, he, she, it, we, they — basic subject pronouns.', examples: ['✓ <strong>I</strong> am happy.', '✓ <strong>She</strong> is a girl.', '✓ <strong>They</strong> are friends.', '✗ Me am happy.'] },
        { title: '📌 To Be (am/is/are)', tag: 'A0', desc: 'Use <strong>am</strong> with I, <strong>is</strong> with he/she/it, <strong>are</strong> with you/we/they.', examples: ['✓ I <strong>am</strong> a student.', '✓ She <strong>is</strong> happy.', '✓ They <strong>are</strong> friends.', '✗ I is a student.'] },
    ],
    A1: [
        { title: '📌 Articles (a/an/the)', tag: 'A1', desc: 'Use <strong>a</strong> before consonants, <strong>an</strong> before vowels, <strong>the</strong> for specific things.', examples: ['✓ I have <strong>a</strong> dog.', '✓ She eats <strong>an</strong> apple.', '✓ <strong>The</strong> sun is bright.', '✗ I have an dog.'] },
        { title: '📌 Plural Nouns', tag: 'A1', desc: 'Most nouns add <strong>-s</strong>. Some add <strong>-es</strong>, <strong>-ies</strong>.', examples: ['✓ cat → <strong>cats</strong>', '✓ box → <strong>boxes</strong>', '✓ baby → <strong>babies</strong>', '✓ child → <strong>children</strong>'] },
    ],
    A2: [
        { title: '📌 Present Simple', tag: 'A2', desc: 'Add <strong>-s/-es</strong> for he/she/it.', examples: ['✓ He <strong>plays</strong> football.', '✓ She <strong>watches</strong> TV.', '✗ She play football.'] },
        { title: '📌 Past Simple', tag: 'A2', desc: 'Regular verbs add <strong>-ed</strong>. Some are irregular.', examples: ['✓ I <strong>walked</strong> home.', '✓ She <strong>went</strong> to school.', '✗ I goed to school.'] },
    ],
    B1: [
        { title: '📌 Present Perfect', tag: 'B1', desc: 'Use <strong>have/has + past participle</strong> for experiences.', examples: ['✓ I <strong>have visited</strong> London.', '✓ She <strong>has eaten</strong> sushi.', '✗ I have visit London.'] },
        { title: '📌 Conditionals (1st & 2nd)', tag: 'B1', desc: 'If + present → will (real). If + past → would (unreal).', examples: ['✓ If it <strong>rains</strong>, I <strong>will</strong> stay.', '✓ If I <strong>were</strong> rich, I <strong>would</strong> travel.', '✗ If I would be rich...'] },
    ],
    B2: [
        { title: '📌 Passive Voice', tag: 'B2', desc: 'Subject receives the action: <strong>be + past participle</strong>.', examples: ['✓ The cake <strong>was made</strong> by her.', '✓ The results <strong>are being analyzed</strong>.', '✗ The cake made by her.'] },
        { title: '📌 Reported Speech', tag: 'B2', desc: 'Shift tenses back when reporting what someone said.', examples: ['✓ He said he <strong>was</strong> tired.', '✓ She told me she <strong>had finished</strong>.', '✗ He said he is tired.'] },
    ],
    C1: [
        { title: '📌 Inversion', tag: 'C1', desc: 'Reverse subject-verb order for emphasis.', examples: ['✓ <strong>Never have</strong> I seen such beauty.', '✓ <strong>Scarcely had</strong> he arrived when...', '✗ Never I have seen...'] },
        { title: '📌 Mixed Conditionals', tag: 'C1', desc: 'Mix time references in if-clauses.', examples: ['✓ If I <strong>had studied</strong>, I <strong>would be</strong> fluent now.', '✓ If she <strong>were</strong> braver, she <strong>would have said</strong> yes.'] },
    ],
    C2: [
        { title: '📌 Subjunctive Mood', tag: 'C2', desc: 'Express wishes, demands, suggestions with base form.', examples: ['✓ I suggest he <strong>be</strong> more careful.', '✓ It is vital that she <strong>attend</strong>.', '✗ I suggest he is more careful.'] },
        { title: '📌 Cleft Sentences', tag: 'C2', desc: 'Use "It is/was...that" to emphasize.', examples: ['✓ <strong>It was John</strong> who solved it.', '✓ <strong>What I need</strong> is a break.', '✗ John solved it. (no emphasis)'] },
    ],
};

// ===== Word of Day by Level =====
const levelWordsOfDay = {
    A0: [
        { word: 'Happy', phonetic: '/ˈhæpi/', type: 'adjective', definition: 'Feeling pleasure or joy.', example: 'I am <strong>happy</strong> today!' },
        { word: 'Good', phonetic: '/ɡʊd/', type: 'adjective', definition: 'Of high quality or standard.', example: 'This is a <strong>good</strong> book.' },
    ],
    A1: [
        { word: 'Wonderful', phonetic: '/ˈwʌndərfl/', type: 'adjective', definition: 'Extremely good; marvellous.', example: 'The weather is <strong>wonderful</strong>!' },
        { word: 'Friend', phonetic: '/frend/', type: 'noun', definition: 'A person you like and trust.', example: 'She is my best <strong>friend</strong>.' },
    ],
    A2: [
        { word: 'Adventure', phonetic: '/ədˈventʃər/', type: 'noun', definition: 'An exciting experience.', example: 'Learning is a great <strong>adventure</strong>.' },
        { word: 'Discover', phonetic: '/dɪˈskʌvər/', type: 'verb', definition: 'To find something for the first time.', example: 'Let\'s <strong>discover</strong> new words!' },
    ],
    B1: [
        { word: 'Brilliant', phonetic: '/ˈbrɪliənt/', type: 'adjective', definition: 'Exceptionally clever.', example: 'You are a <strong>brilliant</strong> student!' },
        { word: 'Courage', phonetic: '/ˈkɜːrɪdʒ/', type: 'noun', definition: 'Bravery in facing fear.', example: 'It takes <strong>courage</strong> to speak a new language.' },
    ],
    B2: [
        { word: 'Resilient', phonetic: '/rɪˈzɪliənt/', type: 'adjective', definition: 'Able to recover quickly.', example: 'She is very <strong>resilient</strong>.' },
        { word: 'Ambition', phonetic: '/æmˈbɪʃn/', type: 'noun', definition: 'A strong desire to achieve.', example: 'His <strong>ambition</strong> drove him forward.' },
    ],
    C1: [
        { word: 'Eloquent', phonetic: '/ˈeləkwənt/', type: 'adjective', definition: 'Fluent and persuasive in speech.', example: 'She gave an <strong>eloquent</strong> speech.' },
        { word: 'Perseverance', phonetic: '/ˌpɜːrsəˈvɪrəns/', type: 'noun', definition: 'Persistence despite difficulty.', example: '<strong>Perseverance</strong> leads to success.' },
    ],
    C2: [
        { word: 'Ephemeral', phonetic: '/ɪˈfemərəl/', type: 'adjective', definition: 'Lasting a very short time.', example: 'Beauty is often <strong>ephemeral</strong>.' },
        { word: 'Serendipity', phonetic: '/ˌserənˈdɪpəti/', type: 'noun', definition: 'A happy accident or pleasant surprise.', example: 'It was pure <strong>serendipity</strong>.' },
    ],
};

// Category display names
const categoryNames = {
    greetings: '👋 Greetings', numbers: '🔢 Numbers', colors: '🎨 Colors',
    animals: '🐾 Animals', food: '🍎 Food', family: '👨‍👩‍👧‍👦 Family',
    daily: '🏠 Daily Life', weather: '🌤️ Weather', school: '🏫 School',
    travel: '✈️ Travel', health: '🏥 Health', work: '💼 Work',
    emotions: '😊 Emotions', science: '🔬 Science', media: '📰 Media',
    academic: '🎓 Academic', business: '📈 Business', idioms: '💬 Idioms',
    literature: '📜 Literature', philosophy: '🧠 Philosophy', advanced: '🌀 Advanced',
};
