// Элементы модального окна
const modal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

// Открытие модального окна
function openLoginModal() {
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeLoginModal() {
    modal.style.display = 'none';
}



// Обработка формы
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Проверка логина и пароля (без бэкенда)
    if (validateLogin(username, password)) {
        showMessage('Успешный вход! Добро пожаловать!', 'success');
        setTimeout(() => {
            closeLoginModal();
            // Здесь можно добавить редирект или другие действия
        }, 1500);
    } else {
        showMessage('Неверный логин или пароль!', 'error');
    }
});

// Функция валидации (замените на свои данные)
function validateLogin(username, password) {
    const validUsers = {
        'admin': 'password123',
        'user': '123456',
        'genshin': 'teyvat',
        'test': 'test'
    };
    
    return validUsers[username] && validUsers[username] === password;
}

// Показать сообщение
function showMessage(text, type) {
    // Создаем или находим элемент для сообщения
    let messageEl = document.querySelector('.message');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'message';
        loginForm.appendChild(messageEl);
    }
    
    messageEl.textContent = text;
    messageEl.className = 'message ' + type;
    messageEl.style.display = 'block';
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
}

// Стили для сообщений
const style = document.createElement('style');
style.textContent = `
    .message {
        margin-top: 15px;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        display: none;
    }
    .message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    .message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
`;
document.head.appendChild(style);