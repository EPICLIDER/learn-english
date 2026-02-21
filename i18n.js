// ===== Internationalization (i18n) =====
let currentLang = 'ru';

const translations = {
    ru: {
        // Registration
        reg_title: 'Добро пожаловать!',
        reg_title_highlight: 'Начнём',
        reg_subtitle: 'Создайте профиль, чтобы начать изучение английского.',
        reg_name: 'Ваше имя',
        reg_surname: 'Фамилия',
        reg_phone: 'Номер телефона',
        reg_email: 'Электронная почта',
        reg_nickname: 'Придумайте ник',
        reg_country: 'Страна',
        reg_password: 'Пароль',
        reg_confirm_password: 'Подтвердите пароль',
        reg_submit: 'Начать 🚀',
        reg_has_account: 'Уже есть аккаунт?',
        reg_login_link: 'Войти',
        reg_name_ph: 'Введите имя...',
        reg_surname_ph: 'Введите фамилию...',
        reg_phone_ph: '+998 ...',
        reg_email_ph: 'email@example.com',
        reg_nickname_ph: 'Ваш никнейм...',
        reg_password_ph: 'Мин. 6 символов',
        reg_confirm_ph: 'Повторите пароль...',
        reg_select_country: '-- Выберите страну --',
        reg_error_fill: 'Заполните все поля',
        reg_error_password: 'Пароли не совпадают',
        reg_error_password_len: 'Пароль мин. 6 символов',
        reg_error_exists: 'Аккаунт с таким email/ником уже существует',

        // Login
        login_title: 'С возвращением!',
        login_title_highlight: 'Войти',
        login_subtitle: 'Введите email или никнейм и пароль.',
        login_identifier: 'Email или никнейм',
        login_identifier_ph: 'Email или никнейм...',
        login_password: 'Пароль',
        login_password_ph: 'Ваш пароль...',
        login_submit: 'Войти 🔑',
        login_no_account: 'Нет аккаунта?',
        login_register_link: 'Зарегистрироваться',
        login_error: 'Неверный email/ник или пароль',

        // Navigation
        nav_features: 'Возможности',
        nav_vocabulary: 'Словарь',
        nav_quiz: 'Тест',
        nav_grammar: 'Грамматика',
        nav_tenses: 'Времена',
        nav_translator: 'Переводчик',
        nav_word_of_day: 'Слово дня',
        nav_account: 'Профиль',

        // Hero
        hero_welcome: 'Добро пожаловать,',
        hero_keep_going: 'Продолжай,',
        hero_subtitle: 'Освой все навыки на своём уровне и сдай тест, чтобы подняться выше!',
        hero_start: 'Начать обучение 🚀',
        hero_quiz: 'Пройти тест 🧠',

        // Features
        features_title: 'Почему вам',
        features_title_hl: 'понравится',
        features_subtitle: 'Всё, что нужно для изучения английского — в одном месте.',
        feat_levels: 'Обучение по уровням',
        feat_levels_desc: 'Контент адаптирован к вашему уровню CEFR. От нуля до профессионала!',
        feat_quizzes: 'Умные тесты',
        feat_quizzes_desc: 'Проверяйте свои знания с помощью тестов по уровню и следите за прогрессом!',
        feat_skills: 'Навыки',
        feat_skills_desc: 'Освойте все навыки на своём уровне, а затем сдайте тест, чтобы продвинуться!',
        feat_levelup: 'Повышение уровня',
        feat_levelup_desc: 'Докажите мастерство и поднимитесь от A0 до C2. Дойдите до вершины!',

        // Vocabulary
        vocab_title: 'Учите новые',
        vocab_title_hl: 'слова',
        vocab_subtitle: 'Выберите категорию и нажмите на карточку, чтобы увидеть перевод!',
        vocab_save: 'Сохранить',
        vocab_saved: 'Сохранено ✓',

        // Quiz
        quiz_title: 'Проверьте свои',
        quiz_title_hl: 'знания',
        quiz_subtitle: 'Ответьте на 5 вопросов вашего уровня!',
        quiz_next: 'Следующий вопрос →',
        quiz_complete: 'Тест завершён!',
        quiz_try_again: 'Ещё раз 🔄',
        quiz_perfect: '🏆 Идеальный результат! Ты — звезда!',
        quiz_excellent: '🌟 Отлично! Почти идеально!',
        quiz_good: '👍 Хорошо! Продолжай тренироваться!',
        quiz_keep_going: '💪 Не сдавайся! Практика — путь к успеху!',
        quiz_correct: '🎉 Правильно! Молодец!',
        quiz_wrong: '❌ Неверно! Правильный ответ:',

        // Grammar
        grammar_title: 'Грамматика',
        grammar_title_hl: 'правила',
        grammar_subtitle: 'Грамматические правила по вашему уровню для правильной речи и письма.',

        // Tenses
        tenses_title: 'Английские',
        tenses_title_hl: 'времена',
        tenses_subtitle: 'Выберите время, изучите правила и сдайте тест!',
        tenses_formula: 'Формула',
        tenses_usage: 'Когда используется',
        tenses_signal: 'Слова-маркеры',
        tenses_examples: 'Примеры',
        tenses_take_test: 'Пройти тест 📝',
        tenses_back: '← Назад к временам',

        // Translator
        translator_title: 'Переводчик',
        translator_title_hl: 'слов',
        translator_subtitle: 'Введите слово или фразу для перевода.',
        translator_input_ph: 'Введите слово или фразу...',
        translator_btn: 'Перевести 🔄',
        translator_direction: 'Направление перевода',
        translator_en_to_native: 'English → Русский',
        translator_native_to_en: 'Русский → English',
        translator_no_result: 'Перевод не найден. Попробуйте другое слово.',
        translator_result_label: 'Перевод:',

        // Word of Day
        wod_title: 'Слово',
        wod_title_hl: 'дня',
        wod_subtitle: 'Расширяйте словарный запас — по одному слову в день!',
        wod_label: '📅 Слово дня',

        // Level Up
        levelup_title: 'Готовы',
        levelup_title_hl: 'повыситься',
        levelup_subtitle: 'Вы освоили все навыки на текущем уровне!',
        levelup_next: 'Следующий уровень:',
        levelup_btn: 'Сдать тест 🏆',
        levelup_max: '👑 Вы покорили английский!',

        // Level Selection
        level_select_title: 'Выберите свой',
        level_select_hl: 'уровень',
        level_select_sub: 'Выберите уровень, подходящий вашим знаниям. Вы пройдёте короткий тест.',

        // Placement
        placement_title: 'Вступительный тест',
        placement_sub: 'Ответьте на 7 вопросов. Набрать 70%+ чтобы начать с этого уровня.',
        placement_congrats: '🎉 Поздравляем!',
        placement_passed: 'Вы сдали! Начинаете с уровня',
        placement_start_begin: '📚 Начнём с начала',
        placement_begin_msg: 'Не переживайте! Все с чего-то начинают. Вы начнёте с',
        placement_almost: '💪 Почти получилось!',
        placement_try: 'Давайте попробуем уровень',
        placement_continue: 'Продолжить →',
        placement_start_learning: 'Начать обучение →',

        // Account
        account_title: 'Мой',
        account_title_hl: 'профиль',
        account_info: 'Информация',
        account_name: 'Имя',
        account_surname: 'Фамилия',
        account_nickname: 'Никнейм',
        account_email: 'Email',
        account_phone: 'Телефон',
        account_country: 'Страна',
        account_level: 'Уровень',
        account_lang: 'Язык интерфейса',
        account_saved_words: 'Сохранённые слова',
        account_no_saved: 'Сохранённых слов пока нет. Нажмите 🔖 на словарной карточке.',
        account_tense_results: 'Результаты тестов по временам',
        account_no_tests: 'Вы ещё не сдавали тесты по временам.',
        account_delete: 'Удалить аккаунт',
        account_delete_confirm: 'Удалить аккаунт и все данные? Это нельзя отменить.',
        account_close: 'Закрыть',
        account_stats: 'Статистика',
        account_quizzes_taken: 'Тесты пройдены',
        account_skills_completed: 'Навыков освоено',

        // Countries
        country_uzbekistan: 'Узбекистан',
        country_russia: 'Россия',
        country_kazakhstan: 'Казахстан',
        country_kyrgyzstan: 'Кыргызстан',
        country_tajikistan: 'Таджикистан',
        country_turkmenistan: 'Туркменистан',
        country_ukraine: 'Украина',
        country_belarus: 'Беларусь',
        country_other: 'Другая',

        // Misc
        logout_confirm: 'Вы уверены, что хотите выйти?',
        skills_text: 'навыков',
        score: 'Счёт',
        level_test: '🏆 Тест на повышение',
        level_test_pass: 'Пройдите тест (70%+), чтобы перейти на следующий уровень!',
        correct_answer: '🎉 Правильно!',
        wrong_answer: '❌ Правильный ответ:',
        level_up_success: '🎉 Уровень повышен!',
        level_up_welcome: 'Добро пожаловать на уровень',
        level_up_fail: '📚 Продолжайте учиться!',
        level_up_fail_msg: 'Нужно 70%, чтобы сдать. Повторите материал и попробуйте снова!',
        back_to_learning: 'Вернуться к обучению →',

        footer_made: 'Сделано с ❤️ для всех, кто учит английский. Учитесь и развивайтесь!',
    },

    uz: {
        // Registration
        reg_title: 'Xush kelibsiz!',
        reg_title_highlight: 'Boshlaylik',
        reg_subtitle: 'Ingliz tilini o\'rganish sayohatingizni boshlash uchun profil yarating.',
        reg_name: 'Ismingiz',
        reg_surname: 'Familiyangiz',
        reg_phone: 'Telefon raqami',
        reg_email: 'Elektron pochta',
        reg_nickname: 'Nik tanlang',
        reg_country: 'Davlat',
        reg_password: 'Parol',
        reg_confirm_password: 'Parolni tasdiqlang',
        reg_submit: 'Boshlash 🚀',
        reg_has_account: 'Akkauntingiz bormi?',
        reg_login_link: 'Kirish',
        reg_name_ph: 'Ismingizni kiriting...',
        reg_surname_ph: 'Familiyangizni kiriting...',
        reg_phone_ph: '+998 ...',
        reg_email_ph: 'email@example.com',
        reg_nickname_ph: 'Nikneymingiz...',
        reg_password_ph: 'Min. 6 belgi',
        reg_confirm_ph: 'Parolni qaytaring...',
        reg_select_country: '-- Davlatni tanlang --',
        reg_error_fill: 'Barcha maydonlarni to\'ldiring',
        reg_error_password: 'Parollar mos kelmadi',
        reg_error_password_len: 'Parol kamida 6 belgi bo\'lsin',
        reg_error_exists: 'Bu email/nik bilan akkaunt mavjud',

        // Login
        login_title: 'Qaytganingizdan xursandmiz!',
        login_title_highlight: 'Kirish',
        login_subtitle: 'Email yoki nikneym va parolingizni kiriting.',
        login_identifier: 'Email yoki nikneym',
        login_identifier_ph: 'Email yoki nikneym...',
        login_password: 'Parol',
        login_password_ph: 'Parolingiz...',
        login_submit: 'Kirish 🔑',
        login_no_account: 'Akkauntingiz yo\'qmi?',
        login_register_link: 'Ro\'yxatdan o\'tish',
        login_error: 'Noto\'g\'ri email/nik yoki parol',

        // Navigation
        nav_features: 'Imkoniyatlar',
        nav_vocabulary: 'Lug\'at',
        nav_quiz: 'Test',
        nav_grammar: 'Grammatika',
        nav_tenses: 'Zamonlar',
        nav_translator: 'Tarjimon',
        nav_word_of_day: 'Kun so\'zi',
        nav_account: 'Profil',

        // Hero
        hero_welcome: 'Xush kelibsiz,',
        hero_keep_going: 'Davom eting,',
        hero_subtitle: 'O\'z darajangizda barcha ko\'nikmalarni o\'zlashtiring va darajangizni oshiring!',
        hero_start: 'O\'rganishni boshlash 🚀',
        hero_quiz: 'Test topshirish 🧠',

        // Features
        features_title: 'Nima uchun sizga',
        features_title_hl: 'yoqadi',
        features_subtitle: 'Ingliz tilini o\'rganish uchun kerak bo\'lgan hamma narsa — bir joyda.',
        feat_levels: 'Darajaga asoslangan ta\'lim',
        feat_levels_desc: 'CEFR darajangizga moslashtirilgan kontent. Noldan professionalgacha!',
        feat_quizzes: 'Aqlli testlar',
        feat_quizzes_desc: 'Bilimlaringizni darajangizga mos testlar bilan tekshiring va progressingizni kuzating!',
        feat_skills: 'Ko\'nikma rivojlanishi',
        feat_skills_desc: 'Barcha ko\'nikmalarni o\'zlashtiring, keyin testdan o\'ting!',
        feat_levelup: 'Daraja oshirish',
        feat_levelup_desc: 'Mahoratingizni isbotlang va A0 dan C2 gacha ko\'tariling!',

        // Vocabulary
        vocab_title: 'Yangi so\'zlarni',
        vocab_title_hl: 'o\'rganing',
        vocab_subtitle: 'Kategoriya tanlang va tarjimasini ko\'rish uchun kartochkani bosing!',
        vocab_save: 'Saqlash',
        vocab_saved: 'Saqlangan ✓',

        // Quiz
        quiz_title: 'Bilimlaringizni',
        quiz_title_hl: 'tekshiring',
        quiz_subtitle: 'Darajangizga mos 5 ta savolga javob bering!',
        quiz_next: 'Keyingi savol →',
        quiz_complete: 'Test yakunlandi!',
        quiz_try_again: 'Qaytadan 🔄',
        quiz_perfect: '🏆 Mukammal natija! Siz — yulduzsiz!',
        quiz_excellent: '🌟 A\'lo! Deyarli mukammal!',
        quiz_good: '👍 Yaxshi! Mashq qilishda davom eting!',
        quiz_keep_going: '💪 Taslim bo\'lmang! Mashq — muvaffaqiyat kaliti!',
        quiz_correct: '🎉 To\'g\'ri! Barakalla!',
        quiz_wrong: '❌ Noto\'g\'ri! To\'g\'ri javob:',

        // Grammar
        grammar_title: 'Grammatika',
        grammar_title_hl: 'qoidalari',
        grammar_subtitle: 'Darajangizga mos grammatika qoidalari to\'g\'ri gapirish va yozish uchun.',

        // Tenses
        tenses_title: 'Ingliz tili',
        tenses_title_hl: 'zamonlari',
        tenses_subtitle: 'Zamonni tanlang, qoidalarni o\'rganing va test topshiring!',
        tenses_formula: 'Formula',
        tenses_usage: 'Qachon ishlatiladi',
        tenses_signal: 'Signal so\'zlar',
        tenses_examples: 'Misollar',
        tenses_take_test: 'Test topshirish 📝',
        tenses_back: '← Zamonlarga qaytish',

        // Translator
        translator_title: 'So\'z',
        translator_title_hl: 'tarjimoni',
        translator_subtitle: 'Tarjima qilish uchun so\'z yoki iborani kiriting.',
        translator_input_ph: 'So\'z yoki ibora kiriting...',
        translator_btn: 'Tarjima qilish 🔄',
        translator_direction: 'Tarjima yo\'nalishi',
        translator_en_to_native: 'English → O\'zbek',
        translator_native_to_en: 'O\'zbek → English',
        translator_no_result: 'Tarjima topilmadi. Boshqa so\'zni sinab ko\'ring.',
        translator_result_label: 'Tarjima:',

        // Word of Day
        wod_title: 'Kun',
        wod_title_hl: 'so\'zi',
        wod_subtitle: 'Lug\'atingizni kengaytiring — har kuni bitta so\'z!',
        wod_label: '📅 Kun so\'zi',

        // Level Up
        levelup_title: 'Darajangizni',
        levelup_title_hl: 'oshirishga tayyormisiz',
        levelup_subtitle: 'Joriy darajadagi barcha ko\'nikmalarni o\'zlashtirdingiz!',
        levelup_next: 'Keyingi daraja:',
        levelup_btn: 'Test topshirish 🏆',
        levelup_max: '👑 Ingliz tilini o\'zlashtirdingiz!',

        // Level Selection
        level_select_title: 'O\'z',
        level_select_hl: 'darajangizni tanlang',
        level_select_sub: 'Bilimingizga mos darajani tanlang. Qisqa test topshirasiz.',

        // Placement
        placement_title: 'Kirish testi',
        placement_sub: '7 ta savolga javob bering. Ushbu darajada boshlash uchun 70%+ to\'plang.',
        placement_congrats: '🎉 Tabriklaymiz!',
        placement_passed: 'Siz o\'tdingiz! Boshlash darajasi:',
        placement_start_begin: '📚 Boshidan boshlaylik',
        placement_begin_msg: 'Tashvishlanmang! Hamma boshdan boshlaydi. Siz boshlaydigan daraja:',
        placement_almost: '💪 Deyarli muvaffaqiyat!',
        placement_try: 'Keling, darajasini sinab ko\'raylik:',
        placement_continue: 'Davom etish →',
        placement_start_learning: 'O\'rganishni boshlash →',

        // Account
        account_title: 'Mening',
        account_title_hl: 'profilim',
        account_info: 'Ma\'lumotlar',
        account_name: 'Ism',
        account_surname: 'Familiya',
        account_nickname: 'Nikneym',
        account_email: 'Email',
        account_phone: 'Telefon',
        account_country: 'Davlat',
        account_level: 'Daraja',
        account_lang: 'Interfeys tili',
        account_saved_words: 'Saqlangan so\'zlar',
        account_no_saved: 'Hech qanday so\'z saqlanmagan. Lug\'at kartochkasidagi 🔖 ni bosing.',
        account_tense_results: 'Zamon testlari natijalari',
        account_no_tests: 'Siz hali zamon testlaridan o\'tmagansiz.',
        account_delete: 'Akkauntni o\'chirish',
        account_delete_confirm: 'Akkauntni va barcha ma\'lumotlarni o\'chirasizmi? Buni qaytarib bo\'lmaydi.',
        account_close: 'Yopish',
        account_stats: 'Statistika',
        account_quizzes_taken: 'Testlar topshirildi',
        account_skills_completed: 'Ko\'nikmalar o\'zlashtirildi',

        // Countries
        country_uzbekistan: 'O\'zbekiston',
        country_russia: 'Rossiya',
        country_kazakhstan: 'Qozog\'iston',
        country_kyrgyzstan: 'Qirg\'iziston',
        country_tajikistan: 'Tojikiston',
        country_turkmenistan: 'Turkmaniston',
        country_ukraine: 'Ukraina',
        country_belarus: 'Belarus',
        country_other: 'Boshqa',

        // Misc
        logout_confirm: 'Chiqishni xohlaysizmi?',
        skills_text: 'ko\'nikmalar',
        score: 'Ball',
        level_test: '🏆 Daraja ko\'tarish testi',
        level_test_pass: 'Keyingi darajaga o\'tish uchun testdan o\'ting (70%+)!',
        correct_answer: '🎉 To\'g\'ri!',
        wrong_answer: '❌ To\'g\'ri javob:',
        level_up_success: '🎉 Daraja oshdi!',
        level_up_welcome: 'Xush kelibsiz, daraja:',
        level_up_fail: '📚 O\'rganishda davom eting!',
        level_up_fail_msg: 'O\'tish uchun 70% kerak. Materialni takrorlang va qayta urinib ko\'ring!',
        back_to_learning: 'O\'rganishga qaytish →',

        footer_made: '❤️ bilan yaratilgan — ingliz tilini o\'rganuvchilar uchun. O\'rganing va o\'sing!',
    }
};

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || (translations['ru'] && translations['ru'][key]) || key;
}

function setLanguage(lang) {
    currentLang = lang;
    if (currentUser) {
        currentUser.language = lang;
        saveUser();
    }
    localStorage.setItem('learnEnglishLang', lang);
}

function getTranslationField() {
    return currentLang === 'uz' ? 'translation_uz' : 'translation';
}
