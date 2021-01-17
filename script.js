// Imports and Constants
const container = document.getElementById('dice-container')
const die1 = document.getElementById('dice-1')
const die2 = document.getElementById('dice-2')
const die3 = document.getElementById('dice-3')
const die4 = document.getElementById('dice-4')
const reload = document.getElementById('reload')

// Functions

// To produce a random number between 1 and 6, 7 is used a highest number but not returnable
function rollDice(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

let dice1 = rollDice(1, 7)
let dice2 = rollDice(1, 7)
let dice3 = rollDice(1, 7)
let dice4 = rollDice(1, 7)
    console.log(dice1, dice2, dice3, dice4)


function Dice1() {
    const die1 = document.createElement('div')
    die1.classList.add('dice', 'first-face')
    const dot1 = document.createElement('span')
    dot1.classList.add('dot') 
    die1.appendChild(dot1)
    container.appendChild(die1)
}

function Dice2() {
    const die2 = document.createElement('div')
    die2.classList.add('dice', 'second-face')
    const dot1 = document.createElement('span')
    dot1.classList.add('dot') 
    const dot2 = document.createElement('span')
    dot2.classList.add('dot') 
    die2.appendChild(dot1)
    die2.appendChild(dot2)
    container.appendChild(die2)
}

function Dice3() {
    const die3 = document.createElement('div')
    die3.classList.add('dice', 'third-face')
    const dot1 = document.createElement('span')
    dot1.classList.add('dot') 
    const dot2 = document.createElement('span')
    dot2.classList.add('dot')
    const dot3 = document.createElement('span')
    dot3.classList.add('dot')
    die3.appendChild(dot1)
    die3.appendChild(dot2)
    die3.appendChild(dot3)
    container.appendChild(die3)
}

function Dice4() {
    const die4 = document.createElement('div')
    die4.classList.add('dice', 'fourth-face')
    const col1 = document.createElement('div')
    col1.classList.add('column')
    const dot1 = document.createElement('span')
    dot1.classList.add('dot') 
    const dot2 = document.createElement('span')
    dot2.classList.add('dot')
    col1.appendChild(dot1)
    col1.appendChild(dot2)
    const col2 = document.createElement('div')
    col2.classList.add('column')
    const dot3 = document.createElement('span')
    dot3.classList.add('dot') 
    const dot4 = document.createElement('span')
    dot4.classList.add('dot')
    col2.appendChild(dot3)
    col2.appendChild(dot4)
    die4.appendChild(col1)
    die4.appendChild(col2)
    container.appendChild(die4)
}

function Dice5() {
    const die5 = document.createElement('div')
    die5.classList.add('dice', 'fifth-face')
    const col1 = document.createElement('div')
    col1.classList.add('column')
    const dot1 = document.createElement('span')
    dot1.classList.add('dot') 
    const dot2 = document.createElement('span')
    dot2.classList.add('dot')
    col1.appendChild(dot1)
    col1.appendChild(dot2)
    const col2 = document.createElement('div')
    col2.classList.add('column')
    const dot3 = document.createElement('span')
    dot3.classList.add('dot') 
    const col3 = document.createElement('div')
    col3.classList.add('column')
    const dot4 = document.createElement('span')
    dot4.classList.add('dot')
    const dot5 = document.createElement('span')
    dot5.classList.add('dot')
    col2.appendChild(dot3)
    col3.appendChild(dot4)
    col3.appendChild(dot5)
    die5.appendChild(col1)
    die5.appendChild(col2)
    die5.appendChild(col3)
    container.appendChild(die5)
}

function Dice6() {
    const die6 = document.createElement('div')
    die6.classList.add('dice', 'sixth-face')
    const col1 = document.createElement('div')
    col1.classList.add('column')
    const dot1 = document.createElement('span')
    dot1.classList.add('dot') 
    const dot2 = document.createElement('span')
    dot2.classList.add('dot')
    col1.appendChild(dot1)
    col1.appendChild(dot2)
    const col2 = document.createElement('div')
    col2.classList.add('column')
    const dot3 = document.createElement('span')
    dot3.classList.add('dot') 
    const dot4 = document.createElement('span')
    dot4.classList.add('dot')
    col2.appendChild(dot3)
    col2.appendChild(dot4)
    const col3 = document.createElement('div')
    col3.classList.add('column')
    const dot5 = document.createElement('span')
    dot5.classList.add('dot') 
    const dot6 = document.createElement('span')
    dot6.classList.add('dot')
    col3.appendChild(dot5)
    col3.appendChild(dot6)
    die6.appendChild(col1)
    die6.appendChild(col2)
    die6.appendChild(col3)
    container.appendChild(die6)
}

// create dice and add to DOM
function createDice1() {
    if(dice1 === 1) {
        Dice1()
    } else if(dice1 === 2) {
        Dice2()
    } else if(dice1 === 3) {
        Dice3()
    } else if(dice1 === 4) {
        Dice4()
    } else if(dice1 === 5) {
        Dice5()
    } else if(dice1 === 6) {
        Dice6()
    }
}
// create dice and add to DOM
function createDice2() {
    if(dice2 === 1) {
        Dice1()
    } else if(dice2 === 2) {
        Dice2()
    } else if(dice2 === 3) {
        Dice3()
    } else if(dice2 === 4) {
        Dice4()
    } else if(dice2 === 5) {
        Dice5()
    } else if(dice2 === 6) {
        Dice6()
    }
}
// create dice and add to DOM
function createDice3() {
    if(dice3 === 1) {
        Dice1()
    } else if(dice3 === 2) {
        Dice2()
    } else if(dice3 === 3) {
        Dice3()
    } else if(dice3 === 4) {
        Dice4()
    } else if(dice3 === 5) {
        Dice5()
    } else if(dice3 === 6) {
        Dice6()
    }
}
// create dice and add to DOM
function createDice4() {
    if(dice4 === 1) {
        Dice1()
    } else if(dice4 === 2) {
        Dice2()
    } else if(dice4 === 3) {
        Dice3()
    } else if(dice4 === 4) {
        Dice4()
    } else if(dice4 === 5) {
        Dice5()
    } else if(dice4 === 6) {
        Dice6()
    }
}

function loadNumbers() {
    location.reload()
}

function btn1() {
    container.innerHTML = ''
    createDice1()
}
function btn2() {
    container.innerHTML = ''
    createDice1()
    createDice2()
}
function btn3() {
    container.innerHTML = ''
    createDice1()
    createDice2()
    createDice3()
}
function btn4() {
    container.innerHTML = ''
    createDice1()
    createDice2()
    createDice3()
    createDice4()
}

// Event Listeners
die1.addEventListener('click', btn1)
die2.addEventListener('click', btn2)
die3.addEventListener('click', btn3)
die4.addEventListener('click', btn4)
reload.addEventListener('click', loadNumbers)

// Onload