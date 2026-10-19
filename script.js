// ===== НАСТРОЙКИ VK =====
const VK_ACCESS_TOKEN = 'vk1.a.wpCQAKqGslU2sTOYFF0tmcf-sHMcCCvTVB_vgKireR3-ja-tDd5XD495bbfWebuBO9xloM04YIRuiq3FbQRyZRent8GWydI0yfvOwKWT84WfUY9uUfV5FfomyxWpS1wpYkTfMm37Ih8ElWhggH3_IiUErNGFPnmSnx6LvrkImIzm75E_5OrjFF5ec9-GHEKP_7ZZq0byF8FbTZT-B6p0Zg';
const VK_USER_ID = '624264487';
const VK_API_VERSION = '5.199';

// ===== ТЕКСТЫ НАВЫКОВ =====
const skillData = {
    1: {
        title: 'Работа с ИИ инструментами',
        text: 'Умею работать с нейросетями и ускорять процесс разработки. Использую современные ИИ-решения для написания кода, генерации контента и поиска нестандартных идей. Это позволяет делать проекты быстрее и качественнее.'
    },
    2: {
        title: 'Создание Telegram-ботов',
        text: 'Разрабатываю Telegram-ботов для автоматизации задач, приёма заявок и общения с клиентами. Подключаю ботов к сайту, настраиваю уведомления и интеграции. Пример — форма на этом сайте отправляет заявки прямо в Telegram.'
    },
    3: {
        title: 'Дизайн и анимации',
        text: 'Добавляю плавные анимации, красивые переходы и не перегружаю интерфейс. Все движения на сайте выглядят естественно и приятно для глаза. Минимализм остаётся в приоритете, но с эффектами, которые оживляют страницу.'
    },
    4: {
        title: 'Поддержка и доработки',
        text: 'Помогаю с доработками, правками и поддержкой сайта после запуска. Если что-то нужно изменить или добавить — всегда на связи. Работаем до результата, который тебя устроит.'
    },
    5: {
        title: 'Адаптивная вёрстка',
        text: 'Верстаю адаптивные сайты, которые одинаково хорошо выглядят на ПК, планшетах и телефонах. Все элементы подстраиваются под размер экрана, меню удобно раскрывается, текст остаётся читаемым на любом устройстве без зума.'
    }
};

// ===== ОБНОВЛЕНИЕ КОНТЕНТА НАВЫКА =====
function updateContent(btnId) {
    const num = parseInt(btnId);
    const data = skillData[num];

    // Заголовок и текст
    const titleEl = document.getElementById('smallTitle');
    if (titleEl && data) titleEl.textContent = data.title;

    const textEl = document.getElementById('skillText');
    if (textEl && data) textEl.textContent = data.text;

    // Стикеры
    document.querySelectorAll('.sticker').forEach(sticker => {
        const n = parseInt(sticker.dataset.sticker);
        sticker.classList.toggle('visible', n <= num);
    });

    // Сетка на 5-м шаге
    const board = document.getElementById('stickerBoard');
    if (board) {
        board.classList.toggle('grid-mode', num === 5);
    }

    // Стикер 2: «AI» → «AI agent» на 5-м шаге
    const sticker2 = document.querySelector('.sticker-2');
    if (sticker2) {
        sticker2.textContent = num === 5 ? '🤖 AI agent' : '🤖 AI';
    }
}

// ===== КВАДРАТНЫЕ КНОПКИ =====
document.querySelectorAll('.square-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.square-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateContent(btn.getAttribute('data-btn'));
    });
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
updateContent('1');

// ===== ОТПРАВКА ФОРМЫ В ВК =====
const form = document.getElementById('orderForm');

async function sendVkNotification(message) {
    try {
        await fetch('https://api.vk.com/method/messages.send', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'user_id': VK_USER_ID,
                'message': message,
                'access_token': VK_ACCESS_TOKEN,
                'v': VK_API_VERSION,
                'random_id': Math.floor(Math.random() * 2**31)
            })
        });
        console.log('✅ Заявка отправлена в ВК');
    } catch (error) {
        console.error('❌ Ошибка отправки в ВК:', error);
    }
}

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const phone = document.getElementById('formPhone').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const service = document.getElementById('formService').value.trim();
        const comment = document.getElementById('formComment').value.trim();

        if (!name || !phone || !email || !service) {
            return;
        }

        const message = `
🔔 НОВАЯ ЗАЯВКА С САЙТА-ПОРТФОЛИО

👤 Имя: ${name}
📞 Телефон: ${phone}
✉️ Email: ${email}
💻 Тип сайта: ${service}
📝 Комментарий: ${comment || '—'}
        `.trim();

        sendVkNotification(message);
        form.reset();
    });
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');

if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('open');
        mobileMenuPanel.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('open');
            mobileMenuPanel.classList.remove('mobile-open');
        });
    });
}

// ===== МОДАЛКА ПРОЕКТА 1 =====
function openProject1Modal() {
    document.getElementById('project1Modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProject1Modal() {
    document.getElementById('project1Modal').classList.remove('open');
    document.body.style.overflow = '';
}

// Закрытие по клику на фон
document.addEventListener('click', function(e) {
    const modal = document.getElementById('project1Modal');
    if (modal && e.target === modal) {
        closeProject1Modal();
    }
});

// Закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProject1Modal();
    }
});