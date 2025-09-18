function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function flashRandomColorsForever() {
    const el = document.querySelector('#ranh2');
    if (!el) return;
    setInterval(() => {
        el.style.color = getRandomColor();
        el.style.backgroundColor = getRandomColor();
    }, 500);
}

flashRandomColorsForever();