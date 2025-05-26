function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleString('ru-RU', options);

    clockElement.textContent = formattedDateTime;
}

setInterval(updateClock, 11000);

updateClock();