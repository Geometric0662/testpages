const tg = window.Telegram.WebApp;
tg.expand(); // Расширяем на весь экран

// Настройка главной кнопки Telegram
tg.MainButton.setText("ЗАКРЫТЬ ПРИЛОЖЕНИЕ");
tg.MainButton.hide();

function showScreen(screenId) {
    tg.HapticFeedback.impactOccurred('medium');
    // Логика переключения экранов
    document.getElementById('app').classList.add('hidden');
    document.getElementById('screen-' + screenId).classList.remove('hidden');
    
    // Показываем кнопку "Назад" в самом Telegram
    tg.BackButton.show();
}

tg.onEvent('backButtonClicked', function() {
    // Возвращаемся на главный экран
    document.querySelectorAll('.sub-screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('app').classList.remove('hidden');
    tg.BackButton.hide();
});

// Пример обработки авторизации
document.getElementById('auth-btn').onclick = () => {
    tg.showPopup({
        title: 'Привязка Ozon',
        message: 'Введите ваш номер телефона в следующем окне',
        buttons: [{type: 'ok'}]
    });
};
