// ===== НАСТРОЙКИ TELEGRAM =====
const BOT_TOKEN = '8371303266:AAG4PnJoMnbzonK_2VRQJQtadfrDAOWG7CE';
const CHAT_ID = '1686066001';

// ===== ТЕГИ НАВЫКОВ (десктоп) =====
const skillTags = {
    1: ['ChatGPT', 'DeepSeek', 'Claude', 'Grok'],
    2: ['Telegram API', 'JavaScript', 'Приём заявок', 'Уведомления'],
    3: ['CSS-анимации', 'Плавные переходы', 'Hover-эффекты', 'Минимализм'],
    4: ['Правки', 'Доработки', 'Обновления', 'Обратная связь'],
    5: ['Адаптивность', 'Смартфоны', 'Планшеты', 'Десктоп']
};

// ===== ПЕРЕВОДЫ =====
const translations = {
    ru: {
        navHome: 'Главная',
        navSkills: 'Умею',
        navOffer: 'Предлагаю',
        navBooking: 'Запись',

        heroTitle: 'Начинающий веб-разработчик',
        heroDescription: 'Создаю современные адаптивные сайты и Telegram-ботов. Учусь на бухгалтера-экономиста, но веб-разработка - моё главное увлечение.',
        heroCTA: 'Обсудить проект',
        heroCTA2: 'Смотреть работы',
        statAge: 'лет',
        statProjects: 'проектов',
        statEnthusiasm: 'на связи',
        scrollDown: 'Листай вниз',

        firstName: 'Матвей',
        lastName: 'Завьялов',

        title1: 'Работа с ИИ инструментами',
        title2: 'Создание Telegram-ботов',
        title3: 'Дизайн и анимации',
        title4: 'Поддержка и доработки',
        title5: 'Адаптивная вёрстка',

        skillText1: 'Умею работать с нейросетями и ускорять процесс разработки. Использую современные ИИ-решения для написания кода, генерации контента и поиска нестандартных идей. Это позволяет делать проекты быстрее и качественнее.',
        skillText2: 'Разрабатываю Telegram-ботов для автоматизации задач, приёма заявок и общения с клиентами. Подключаю ботов к сайту, настраиваю уведомления и интеграции. Пример — форма на этом сайте отправляет заявки прямо в Telegram.',
        skillText3: 'Добавляю плавные анимации, красивые переходы и не перегружаю интерфейс. Все движения на сайте выглядят естественно и приятно для глаза. Минимализм остаётся в приоритете, но с эффектами, которые оживляют страницу.',
        skillText4: 'Помогаю с доработками, правками и поддержкой сайта после запуска. Если что-то нужно изменить или добавить — всегда на связи. Работаем до результата, который тебя устроит.',
        skillText5: 'Верстаю адаптивные сайты, которые одинаково хорошо выглядят на ПК, планшетах и телефонах. Все элементы подстраиваются под размер экрана, меню удобно раскрывается, текст остаётся читаемым на любом устройстве без зума.',

        servicesHeading: 'Что я <span class="accent">предлагаю</span>',
        servicePopular: 'Популярно',
        service1Title: 'Сайт-визитка',
        service1Desc: 'Компактный сайт из 3-5 страниц с информацией о компании или человеке. Подходит фрилансерам и небольшим компаниям.',
        service2Title: 'Лендинг',
        service2Desc: 'Одностраничный сайт для продажи одного товара или услуги. Подходит для рекламных кампаний и запуска новых продуктов.',
        service3Title: 'Интернет-магазин',
        service3Desc: 'Многостраничный сайт с каталогом товаров, корзиной и оформлением заказа. Подходит для продажи любых товаров.',

        projectsHeading: 'Мои <span class="accent">работы</span>',
        project1Title: 'Портфолио',
        project1Desc: 'Сайт-визитка, который вы сейчас смотрите. Создан с нуля: HTML, CSS, JavaScript, адаптивная вёрстка, форма с отправкой в Telegram.',
        project2Title: 'Telegram-бот',
        project2Desc: 'Бот для приёма заявок и автоматизации общения с клиентами. Подключается к сайту и отправляет уведомления в Telegram.',
        project3Title: 'Лендинг для кофейни',
        project3Desc: 'Концепт одностраничного сайта для кофейни: меню, галерея, форма бронирования. Дизайн в тёплых тонах с плавными анимациями.',
        project4Title: 'Калькулятор',
        project4Desc: 'Простой калькулятор на JavaScript. Тренировочный проект для отработки работы с DOM, событиями и логикой вычислений.',
        project5Title: 'Список задач',
        project5Desc: 'To-Do приложение с добавлением, удалением и отметкой выполненных задач. Сохраняет данные в браузере, чтобы не терять при перезагрузке.',
        project6Title: 'Погодное приложение',
        project6Desc: 'Мини-приложение, которое показывает текущую погоду в выбранном городе. Работает с внешним API и обновляет данные по запросу.',

        contactHeading: 'Давайте <span class="accent">работать</span> вместе',
        contactNote: 'Чем подробнее опишете задачу, тем быстрее я смогу ответить с решением.',

        formTitle: 'Оставьте заявку',
        formName: 'Имя',
        formPhone: 'Телефон',
        formEmail: 'Email',
        formServiceLabel: 'Тип сайта',
        formComment: 'Комментарий',
        formSubmit: 'Отправить',

        footerText: '© 2026 Матвей Завьялов. Сделано с ❤️ и кодом.'
    },
    en: {
        navHome: 'Home',
        navSkills: 'Skills',
        navOffer: 'Offer',
        navBooking: 'Booking',

        heroTitle: 'Junior Web Developer',
        heroDescription: 'I build modern responsive websites and Telegram bots. I study accounting and economics, but web development is my main passion.',
        heroCTA: 'Discuss a project',
        heroCTA2: 'View works',
        statAge: 'years',
        statProjects: 'projects',
        statEnthusiasm: 'in touch',
        scrollDown: 'Scroll down',

        firstName: 'Matvey',
        lastName: 'Zavyalov',

        title1: 'Working with AI Tools',
        title2: 'Telegram Bot Development',
        title3: 'Design & Animations',
        title4: 'Support & Updates',
        title5: 'Responsive Layout',

        skillText1: 'I know how to work with neural networks and speed up the development process. I use modern AI solutions for coding, content generation and finding non-standard ideas. This allows me to make projects faster and better.',
        skillText2: 'I develop Telegram bots for task automation, request collection and customer communication. I connect bots to websites, set up notifications and integrations. For example, the form on this site sends requests directly to Telegram.',
        skillText3: 'I add smooth animations, beautiful transitions and do not overload the interface. All movements on the site look natural and pleasing to the eye. Minimalism remains a priority, but with effects that bring the page to life.',
        skillText4: 'I help with improvements, edits and website support after launch. If something needs to be changed or added — always in touch. We work until the result that suits you.',
        skillText5: 'I create responsive websites that look great on PC, tablets and phones. All elements adapt to the screen size, the menu opens comfortably, the text remains readable on any device without zooming.',

        servicesHeading: 'What I <span class="accent">offer</span>',
        servicePopular: 'Popular',
        service1Title: 'Business Card Site',
        service1Desc: 'A compact site of 3-5 pages with information about a company or person. Suitable for freelancers and small businesses.',
        service2Title: 'Landing Page',
        service2Desc: 'Single-page site for selling one product or service. Suitable for advertising campaigns and product launches.',
        service3Title: 'Online Store',
        service3Desc: 'Multi-page site with product catalog, cart and checkout. Suitable for selling any goods.',

        projectsHeading: 'My <span class="accent">works</span>',
        project1Title: 'Portfolio',
        project1Desc: 'The business card site you are looking at right now. Built from scratch: HTML, CSS, JavaScript, responsive layout, form with Telegram integration.',
        project2Title: 'Telegram Bot',
        project2Desc: 'A bot for collecting requests and automating customer communication. Connects to the site and sends notifications to Telegram.',
        project3Title: 'Coffee Shop Landing',
        project3Desc: 'A concept single-page site for a coffee shop: menu, gallery, booking form. Warm color design with smooth animations.',
        project4Title: 'Calculator',
        project4Desc: 'A simple JavaScript calculator. A practice project to master working with DOM, events and calculation logic.',
        project5Title: 'To-Do List',
        project5Desc: 'A To-Do app with adding, removing and marking completed tasks. Saves data in the browser so nothing is lost on reload.',
        project6Title: 'Weather App',
        project6Desc: 'A mini-app showing current weather in the selected city. Works with an external API and refreshes data on demand.',

        contactHeading: 'Let\'s <span class="accent">work</span> together',
        contactNote: 'The more details you describe, the faster I can reply with a solution.',

        formTitle: 'Leave a request',
        formName: 'Name',
        formPhone: 'Phone',
        formEmail: 'Email',
        formServiceLabel: 'Site type',
        formComment: 'Comment',
        formSubmit: 'Send',

        footerText: '© 2026 Matvey Zavyalov. Made with ❤️ and code.'
    }
};

let currentLang = 'ru';
const submitBtn = document.querySelector('.submit-btn');

// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (!translations[lang][key]) return;

        // Не трогаем кнопку отправки, если она в процессе/после отправки
        if (element === submitBtn && submitBtn.disabled) return;

        // Если в переводе есть HTML-разметка (accent) — вставляем как HTML
        if (translations[lang][key].includes('<span')) {
            element.innerHTML = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
    });

    const activeBtn = document.querySelector('.square-btn.active');
    if (activeBtn) updateContent(activeBtn.getAttribute('data-btn'));

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('preferredLanguage', lang);
}

// ===== ОБНОВЛЕНИЕ КОНТЕНТА НАВЫКА =====
function updateContent(btnId) {
    const titleElement = document.getElementById('smallTitle');
    if (titleElement) {
        const key = `title${btnId}`;
        if (translations[currentLang][key]) {
            titleElement.textContent = translations[currentLang][key];
        }
    }

    const skillTextElement = document.getElementById('skillText');
    if (skillTextElement) {
        const key = `skillText${btnId}`;
        if (translations[currentLang][key]) {
            skillTextElement.textContent = translations[currentLang][key];
        }
    }

    const tagsElement = document.getElementById('skillTags');
    if (tagsElement) {
        const tags = skillTags[btnId] || [];
        tagsElement.innerHTML = tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('');
    }

    const currentNum = parseInt(btnId);

    document.querySelectorAll('.sticker').forEach(sticker => {
        const num = parseInt(sticker.dataset.sticker);
        sticker.classList.toggle('visible', num <= currentNum);
    });

    const board = document.getElementById('stickerBoard');
    if (board) {
        board.classList.toggle('grid-mode', currentNum === 5);
    }

    const sticker2 = document.querySelector('.sticker-2');
    if (sticker2) {
        sticker2.textContent = currentNum === 5 ? '🤖 AI agent' : '🤖 AI';
    }
}

// ===== ОБРАБОТЧИКИ =====
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

document.querySelectorAll('.square-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.square-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateContent(btn.getAttribute('data-btn'));
    });
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
const savedLang = localStorage.getItem('preferredLanguage');
setLanguage(savedLang === 'en' ? 'en' : 'ru');

const firstBtn = document.querySelector('.square-btn[data-btn="1"]');
if (firstBtn && !document.querySelector('.square-btn.active')) {
    firstBtn.classList.add('active');
}
updateContent('1');

// ===== ОТПРАВКА ФОРМЫ В TELEGRAM =====
const form = document.getElementById('orderForm');

function getSubmitText() {
    return translations[currentLang].formSubmit || 'Отправить';
}

if (form && submitBtn) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const phone = document.getElementById('formPhone').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const service = document.getElementById('formService').value.trim();
        const comment = document.getElementById('formComment').value.trim();

        if (!name || !phone || !email || !service) {
            submitBtn.textContent = currentLang === 'ru' ? 'Заполните поля' : 'Fill in all fields';
            submitBtn.style.background = '#f76a40';
            submitBtn.style.borderColor = '#f76a40';
            setTimeout(() => {
                submitBtn.textContent = getSubmitText();
                submitBtn.style.background = '';
                submitBtn.style.borderColor = '';
            }, 2500);
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'wait';

        const text = `📋 НОВАЯ ЗАЯВКА\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Email: ${email}\n💻 Тип сайта: ${service}\n📝 Комментарий: ${comment || '—'}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: CHAT_ID, text })
            });

            const result = await response.json();

            if (result.ok) {
                submitBtn.textContent = currentLang === 'ru' ? '✓ Отправлено!' : '✓ Sent!';
                submitBtn.style.background = '#7bc87b';
                submitBtn.style.borderColor = '#7bc87b';
                submitBtn.style.color = '#0b0c10';
                form.reset();
            } else {
                submitBtn.textContent = currentLang === 'ru' ? 'Ошибка. Повторите' : 'Error. Retry';
                submitBtn.style.background = '#f76a40';
                submitBtn.style.borderColor = '#f76a40';
                console.error('Telegram API error:', result);
            }
        } catch (error) {
            submitBtn.textContent = currentLang === 'ru' ? 'Ошибка сети' : 'Network error';
            submitBtn.style.background = '#f76a40';
            submitBtn.style.borderColor = '#f76a40';
            console.error('Network error:', error);
        }

        setTimeout(() => {
            submitBtn.textContent = getSubmitText();
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            submitBtn.style.borderColor = '';
            submitBtn.style.color = '';
            submitBtn.style.opacity = '';
            submitBtn.style.cursor = '';
        }, 3000);
    });
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');

if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuPanel.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuPanel.classList.remove('mobile-open');
        });
    });
}