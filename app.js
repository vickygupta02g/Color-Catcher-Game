
let state = {
    score: 0,
    time: 30,
    isRunning: true,
    targetColor: ""
};


const tar = document.querySelector('.item-target');
const score = document.querySelector('.score-btn');
const timer = document.querySelector('.timer_count');
const buttons = document.querySelectorAll('.item');
const container = document.querySelector('.container');
const resultScore = document.querySelector('.result_score');
const playBtn = document.querySelector('.play');


score.textContent = state.score;
timer.textContent = `${state.time} sec`;


function generateColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}


function startRound() {
    buttons.forEach(btn => {
        const color = generateColor();
        btn.style.backgroundColor = color;
    });

    const randomIndex = Math.floor(Math.random() * buttons.length);
    state.targetColor = buttons[randomIndex].style.backgroundColor;

    tar.style.backgroundColor = state.targetColor;
}


container.addEventListener('click', (e) => {
    if (!state.isRunning) return;

    if (e.target.tagName === 'BUTTON') {
        const clickedColor = e.target.style.backgroundColor;

        if (clickedColor === state.targetColor) {
            state.score += 10;
            score.textContent = state.score;
        }

        startRound();
    }
});


let intervalId = setInterval(() => {
    if (!state.isRunning) return;

    state.time--;
    timer.textContent = `${state.time} sec`;

    if (state.time === 0) {
        endGame();
    }
}, 1000);

function endGame() {
    state.isRunning = false;
    clearInterval(intervalId);

    document.querySelector('.timer').style.display = 'none';
    document.querySelector('main').style.display = 'none';

    resultScore.style.display = 'block';
    resultScore.textContent = `Score: ${state.score}`;

    playBtn.style.display = 'block';
    playBtn.textContent = 'Play Again';
}


playBtn.addEventListener('click', () => {
    // Reset state
    state.score = 0;
    state.time = 30;
    state.isRunning = true;

    score.textContent = state.score;
    timer.textContent = `${state.time} sec`;

    // Reset UI
    document.querySelector('.timer').style.display = 'flex';
    document.querySelector('main').style.display = 'flex';
    resultScore.style.display = 'none';
    playBtn.style.display = 'none';

    startRound();

    
    intervalId = setInterval(() => {
        if (!state.isRunning) return;

        state.time--;
        timer.textContent = `${state.time} sec`;

        if (state.time === 0) {
            endGame();
        }
    }, 1000);
});


startRound();