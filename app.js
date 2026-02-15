const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть на весь экран

// Инициализация цветов Telegram
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);

function showScreen(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    // Показываем нужный
    document.getElementById(screenId).classList.remove('hidden');
    
    // Если мы не на главном, показываем кнопку "Назад" в самом Telegram
    if (screenId !== 'screen-main') {
        tg.BackButton.show();
    } else {
        tg.BackButton.hide();
    }
}

// Обработка кнопки "Назад" в Telegram
tg.onEvent('backButtonClicked', () => {
    showScreen('screen-main');
});

// Пример функции для кнопки "Поймать смену"
document.getElementById('btn-main-action').addEventListener('click', () => {
    tg.HapticFeedback.impactOccurred('heavy'); // Виброотклик
    tg.showConfirm("Запустить поиск смен?", (confirmed) => {
        if (confirmed) {
            tg.showScanQrPopup({ text: "Для теста: отсканируйте что-нибудь" });
        }
    });
});

// Простая проверка на админа (замените на вашу логику через API)
const user = tg.initDataUnsafe.user;
if (user && user.id === 12345678) { // Ваш ID
    document.getElementById('admin-entry').classList.remove('hidden');
}

// Имитация загрузки
window.onload = () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
};
