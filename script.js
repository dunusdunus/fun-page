// прописываем функцию random
 const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
 }


// находим кнопку
const btn = document.querySelector('#btn');
// вешаем обработчик событий
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

// в случае победы
btn.addEventListener('click', () => {
    alert('А ты настойчив, ну ок тогда :(');
});