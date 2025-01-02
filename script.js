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