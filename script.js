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
        if (typeof(currentOperations[i]) === "number" || currentOperations[i] === ".") {
            displayStr = displayStr.concat(currentOperations[i]);
        } else {
            displayStr = displayStr.concat(" " + currentOperations[i] + " ");
        }
    }
    displayText.textContent = displayStr;
}

function clearCalculator() {
    displayText.textContent = "0";
    currentOperations = [];
}

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearCalculator);

const btnsContainer = document.querySelector(".btns-container");
btnsContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.textContent) {
        case "1":
            currentOperations.push(1);
            break;
        case "2":
            currentOperations.push(2);
            break;
        case "3":
            currentOperations.push(3);
            break;
        case "4":
            currentOperations.push(4);
            break;
        case "5":
            currentOperations.push(5);
            break;
        case "6":
            currentOperations.push(6);
            break;
        case "7":
            currentOperations.push(7);
            break;
        case "8":
            currentOperations.push(8);
            break;
        case "9":
            currentOperations.push(9);
            break;
        case "0":
            currentOperations.push(0);
            break;
        case "+":
            currentOperations.push("+");
            break;
        case "-":
            currentOperations.push("-");
            break;
        case "x":
            currentOperations.push("x");
            break;
        case "/":
            currentOperations.push("/");
            break;
        case ".":
            currentOperations.push(".");
            break;
        case "=":
            // currentOperations.push("=");
            break;
    }

    updateDisplay();
})