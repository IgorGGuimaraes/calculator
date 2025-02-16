const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const opEqual = document.querySelector('.opEqual');
const opSum = document.querySelector('.opSum');
const opMinus = document.querySelector('.opMinus');
const opMult = document.querySelector('.opMult');
const opDiv = document.querySelector('.opDiv');
const display = document.querySelector('#display');

let megaArray = []
let isOperatorClicked = false;
let isOperationOk = false;
let numArray = [];
let currentNumber = 0;
let storedNumber = 0;
let signal = '';

function clearDisplay() {
    currentNumber = 0;
    storedNumber = 0;
    display.textContent = 0;
    console.log(currentNumber, storedNumber);
}

clear.addEventListener('click', clearDisplay);

function handleOperators() {
    storedNumber = parseFloat(currentNumber);
    currentNumber = 0;
    console.log(storedNumber, currentNumber); 
}

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        if (currentNumber !== 0){
            handleOperators()
            signal = e.target.classList[3];
            console.log(signal);
            display.textContent = storedNumber + signal;
        }
    })
})

function result () {
    if(storedNumber !== 0){
        const actualNumber = parseFloat(currentNumber);
        console.log(actualNumber);
        megaArray = [storedNumber, actualNumber];
            let sumArray = megaArray.reduce((a, b) => {
                switch(signal) {
                    case '+':
                        return a + b;
                        break;
                    case '-':
                        return a - b;
                        break;
                    case '*':
                        return a * b;
                        break;
                    case '/':
                        return a / b;
                        break;
                }
            });
            display.textContent = `${sumArray}`;
            currentNumber = sumArray.toString();
            storedNumber = 0;
            console.log(storedNumber, currentNumber)
    }
}

opEqual.addEventListener('click', result);

nums.forEach((n) => {
    n.addEventListener('click', (e) => {
        let choseNum = e.target.classList[3];
        if (display.textContent == 0 && choseNum !== '.'){
            display.textContent = `${choseNum}`
            currentNumber = choseNum;
        } else if(currentNumber.toString().indexOf('.') == -1){
            display.textContent += `${choseNum}`;
            currentNumber += choseNum;
        } else if (choseNum !== '.'){
            display.textContent += `${choseNum}`;
            currentNumber += choseNum;
        }
        console.log(currentNumber);
    });
});