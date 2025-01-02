let currentOperations = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// Operation being either a, s, m, d
function operator(a, b, operation) {
    let result;

    switch(operation) {
        case 'a':
            result = add(a, b);
            break;
        case 's':
            result = subtract(a, b);
            break;
        case 'm':
            result = multiply(a, b);
            break;
        case 'd':
            result = divide(a, b);
            break;
    }

    return result;
}


const displayText = document.querySelector(".display-txt");
function updateDisplay() {
    console.log("updating display");
    let displayStr = "";
    for (let i = 0; i < currentOperations.length; i++) {
        if (typeof(currentOperations[i]) === "number") {
            displayStr = displayStr.concat(currentOperations[i]);
        } else {
            displayStr = displayStr.concat(" " + currentOperations[i]);
        }
    }
    displayText.textContent = displayStr;
}

