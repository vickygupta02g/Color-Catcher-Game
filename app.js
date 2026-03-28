let tar = document.querySelector('.item-target');
let value = 0;
let score = document.querySelector('.score-btn');
score.textContent = `${value}`;

let color = document.querySelectorAll('.item');

for (let i = 0; i < color.length; i++) {
    color[i].setAttribute('data-index', `${i + 1}`);
}

function startRound() {
    color.forEach(color_generator);

    let randomIndexofbutton = Math.floor(Math.random() * color.length);
    let choosebtn = color[randomIndexofbutton];
    tar.style.backgroundColor = choosebtn.style.backgroundColor;
}

function color_generator(e) {
    e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

startRound();

let click_event = document.querySelector('.container');
click_event.addEventListener('click', count);

function count(e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.style.backgroundColor === tar.style.backgroundColor) {
            value = value + 10;
            score.textContent = `${value}`;
        }
        
        startRound(); 
    }
}
