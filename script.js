// let currentOperations = [3, "+", 2, 3, "x", 3];
let currentOperations = [];
let resultingOperations = [];

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

// PE(MDAS)
function mdasCheck() {
    while(currentOperations.some((val) => {
        return val === "x" || val === "/";
    })) {

        const operatorIndex = currentOperations.findIndex((element) => {
            return element === "x" || element === "/";
        });
        console.log(operatorIndex);

        resultingOperations.push(operate(currentOperations[operatorIndex - 1], 
            currentOperations[operatorIndex + 1],
            currentOperations[operatorIndex]));
        
        currentOperations.splice(operatorIndex - 1, 3);
    }

    // Once we're done with multiplication and division
    let currentIndex = 1;
    let arrSize = currentOperations.length;
    while (arrSize > 0) {
        resultingOperations.push(operate(currentOperations[currentIndex - 1], 
            currentOperations[currentIndex + 1],
            currentOperations[currentIndex]));
        
        currentOperations = currentOperations.splice(currentIndex - 1, 3);
        currentIndex += 3;

        // Doing this manually because splice is not fast enough 
        // to update before while loop check occurs. Leaves an undefined value
        // in the resulting arr otherwise
        arrSize -= 3; 
    }
}