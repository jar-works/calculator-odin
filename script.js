// let currentOperations = [3, "+", 2, 3, "x", 3];
let currentOperations = [];
let resultingOperations = [];

function add(a, b) {
    return parseInt(a) + parseInt(b);
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

function operate(a, b, operator) {
    let result;

    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }

    return result;
}


const displayText = document.querySelector(".display-txt");
function updateDisplay() {
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
    resultingOperations = [];
    currentOperations = [];
}

function displayResults() {
    displayText.textContent = resultingOperations[resultingOperations.length - 1];
}

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearCalculator);

const btnsContainer = document.querySelector(".btns-container");
btnsContainer.addEventListener("click", (event) => {
    let target = event.target;

    if (event.target.tagName !== "BUTTON") { return }
    if (event.target.textContent === "=") {
        mdas();
        return;
    }

    const targetContentType = parseInt(target.textContent);

    if (isNaN(targetContentType)) { // Push operators always
        currentOperations.push(target.textContent);
    } else { // Push when the last item is not a number, concat if it is
        const currentOpType = currentOperations.length > 0 ? parseInt(currentOperations[currentOperations.length - 1]) : "NaN";
        if (isNaN(currentOpType)) {
            currentOperations.push(target.textContent);
        } else {
            currentOperations[currentOperations.length - 1] = currentOperations[currentOperations.length - 1].concat(target.textContent);
        }
    }

    updateDisplay();
})

// PE(MDAS)
function mdas() {
    while([...currentOperations].some((val) => {
        return val === "x" || val === "/";
    })) {

        const operatorIndex = currentOperations.findIndex((element) => {
            return element === "x" || element === "/";
        });
        console.log(`Removing: ${currentOperations[operatorIndex - 1]}, ${currentOperations[operatorIndex]}, ${currentOperations[operatorIndex + 1]}`);

        resultingOperations.push(operate(currentOperations[operatorIndex - 1], 
            currentOperations[operatorIndex + 1],
            currentOperations[operatorIndex]));

        currentOperations.splice(operatorIndex - 1, 3);
        currentOperations.unshift(resultingOperations[resultingOperations.length - 1]);
    }

    // Once we're done with multiplication and division
    let opIndex = 1;
    let arrSize = currentOperations.length;
    while (arrSize >= 3) {
        console.log("WE'VE GOT VARS LEFT");
        resultingOperations.push(operate(currentOperations[opIndex - 1], 
            currentOperations[opIndex + 1],
            currentOperations[opIndex]));
        
        currentOperations.splice(opIndex - 1, 3);
        currentOperations.unshift(resultingOperations[resultingOperations.length - 1]);

        // Doing this manually because splice is not fast enough 
        // to update before while loop check occurs. Leaves an undefined value
        // in the resulting arr otherwise
        arrSize -= 3;
    }

    displayResults();
}