let word = document.getElementById('word');
let words = [
    'internet',
    'second',
    'management',
    'amount',
    'pause',
    'could',
    'measure',
    'document',
    'pepper',
    'smooth'
];

let input = document.getElementById('word-input');

input.focus()

function getRandomWords() {
    let randomWords = words[Math.floor(Math.random() * words.length)];
    word.innerHTML = randomWords
}

getRandomWords()

let startGameContainer = document.getElementById('startgame-container');
let startGameBtn = document.getElementById('startgame-btn');
let gameContainer = document.getElementById('game-container');

startGameBtn.addEventListener('click', function() {
    startGameContainer.classList.add('hide')
    gameContainer.classList.add('show')
    input.focus()
    launcher = setInterval(timer, 1000)
})

let score = document.getElementById('score-value');
let easyBtn = document.getElementById('easy-btn');
let mediumBtn = document.getElementById('medium-btn');
let hardBtn = document.getElementById('hard-btn');
let headerGameContainer = document.getElementById('header-game-container');

input.addEventListener('input', function() {
    if(input.value == word.innerHTML) {
        score.innerHTML++
        if(score.innerHTML >= 10) {
            headerGameContainer.classList.add('gold-effect')
        } if(easyBtn.classList == 'easy-btn selected') {
            time.innerHTML = parseInt(time.innerHTML) + parseInt(3)
        } if(mediumBtn.classList == 'medium-btn selected') {
            time.innerHTML = parseInt(time.innerHTML) + parseInt(2)
        } if(hardBtn.classList == 'hard-btn selected') {
            time.innerHTML = parseInt(time.innerHTML) + parseInt(1)
        }
        input.focus()
        input.value = ''
        getRandomWords()
        word.classList.add('green-effect')
    }
})

function rightAnimation() {
    word.classList.remove('green-effect')
}

setInterval(rightAnimation, 600);

let gameOverContainer = document.getElementById('gameover-container');
let titleGameOverContainer = document.getElementById('title-gameover-container');
let finalScore = document.getElementById('final-score-value');

function gameOver() {
    gameOverContainer.classList.add('show')
    gameContainer.classList.add('hide')
    finalScore.innerHTML = 'Your final score is' + ' ' + '<img id="star-icon-final" src="assets/image/star.png" alt="star">' + ' ' + score.innerHTML
    input.value = ''
    headerGameContainer.classList.remove('gold-effect')
    if(score.innerHTML >= 10) {
        titleGameOverContainer.innerHTML = 'Wow! Nice job' + ' ' + '<img id="congratulation-icon" src="assets/image/congratulation.png" alt="congratulation">'
    } if(score.innerHTML < 10) {
        titleGameOverContainer.innerHTML = 'Game Over!' + ' ' + '<img id="timeranout-icon" src="assets/image/time.png" alt="timeranout">'
    }
}

let playAgainBtn = document.getElementById('playagain-btn');

playAgainBtn.addEventListener('click', function() {
    insideBar.classList.remove('zero')
    gameOverContainer.classList.remove('show')
    gameContainer.classList.remove('hide')
    time.innerHTML = '8'
    score.innerHTML = '0'
    getRandomWords()
    input.focus()
})

let settingsContainer = document.getElementById('settings-container');
let settingsBtn = document.getElementById('settings-btn');
let settingsIcon = document.getElementById('settings-icon');

settingsBtn.addEventListener('click', function() {
    settingsBtn.classList.toggle('select')
    settingsContainer.classList.toggle('show')
    if(startGameContainer.classList == 'startgame-container show') {
        startGameContainer.classList.remove('show')
        startGameContainer.classList.add('hide')
        settingsIcon.src = 'assets/image/back.png'
    } if(gameContainer.classList == 'game-container show') {
        gameContainer.classList.remove('show')
        gameContainer.classList.add('hide')
        settingsIcon.src = 'assets/image/back.png'
        clearInterval(launcher)
    } if(gameOverContainer.classList == 'gameover-container show') {
        gameOverContainer.classList.remove('show')
        gameOverContainer.classList.add('hide')
        settingsIcon.src = 'assets/image/back.png'
    }

    if(settingsBtn.classList == 'settings-btn') {
        if(startGameContainer.classList == 'startgame-container hide') {
            startGameContainer.classList.add('show')
            startGameContainer.classList.remove('hide')
            settingsIcon.src = 'assets/image/settings.png'
            input.focus()
        } if(gameContainer.classList == 'game-container hide') {
            gameContainer.classList.add('show')
            gameContainer.classList.remove('hide')
            input.focus()
            launcher = setInterval(timer, 1000)
            settingsIcon.src = 'assets/image/settings.png'
        } if(gameOverContainer.classList == 'gameover-container hide') {
            gameOverContainer.classList.add('show')
            gameOverContainer.classList.remove('hide')
            input.focus()
            settingsIcon.src = 'assets/image/settings.png'
        }
    }
})

easyBtn.addEventListener('click', function() {
    easyBtn.classList.add('selected')
    mediumBtn.classList.remove('selected')
    hardBtn.classList.remove('selected')
})

mediumBtn.addEventListener('click', function() {
    mediumBtn.classList.add('selected')
    easyBtn.classList.remove('selected')
    hardBtn.classList.remove('selected')
})

hardBtn.addEventListener('click', function() {
    hardBtn.classList.add('selected')
    easyBtn.classList.remove('selected')
    mediumBtn.classList.remove('selected')
})

let time = document.getElementById('time-value');
let insideBar = document.getElementById('inside-time-bar');

function timer() {
    time.innerHTML--
    if(time.innerHTML > 8) {
        insideBar.classList.remove('zero', 'um', 'dois',
        'tres', 'quatro', 'cinco', 'seis', 'sete')
    } if(time.innerHTML === '7') {
        insideBar.classList.add('sete')
        insideBar.classList.remove('zero', 'um', 'dois',
        'tres', 'quatro', 'cinco', 'seis')
    } if(time.innerHTML === '6') {
        insideBar.classList.add('seis')
        insideBar.classList.remove('zero', 'um', 'dois',
        'tres', 'quatro', 'cinco', 'sete')
    } if(time.innerHTML === '5') {
        insideBar.classList.add('cinco')
        insideBar.classList.remove('zero', 'um', 'dois',
        'tres', 'quatro', 'seis', 'sete')
    } if(time.innerHTML === '4') {
        insideBar.classList.add('quatro')
        insideBar.classList.remove('zero', 'um', 'dois',
        'tres', 'cinco', 'seis', 'sete')
    } if(time.innerHTML === '3') {
        insideBar.classList.add('tres')
        insideBar.classList.remove('zero', 'um', 'dois',
        'quatro', 'cinco', 'seis', 'sete')
    } if(time.innerHTML === '2') {
        insideBar.classList.add('dois')
        insideBar.classList.remove('zero', 'um', 'tres',
        'quatro', 'cinco', 'seis', 'sete')
    } if(time.innerHTML === '1') {
        insideBar.classList.add('um')
        insideBar.classList.remove('zero', 'dois', 'tres',
        'quatro', 'cinco', 'seis', 'sete')
    } if(time.innerHTML === '0') {
        insideBar.classList.add('zero')
        insideBar.classList.remove('um', 'dois', 'tres',
        'quatro', 'cinco', 'seis', 'sete')
        gameOver()
    }
}