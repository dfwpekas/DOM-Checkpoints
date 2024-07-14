document.addEventListener('DOMContentLoaded', () => {
    const colorBoxEl = document.getElementById('color-box');
    const changeColorBtnEl = document.getElementById('change-color-btn');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        return `rgb(${r}, ${g}, ${b})`;
        
    }

    changeColorBtnEl.addEventListener('click', () => {
        const randomColor = getRandomColor();
        colorBoxEl.style.backgroundColor = randomColor;
        

    });
});
