//add function
function add(a,b){
    return a + b;
}

//subtract function
function subtract(a,b){
    return a - b;
}

//multiply function
function multiply(a,b){
    return a * b;
}

//divide function
function divide(a,b){
    return a / b;
}

var num1;
var num2;
var operator;

function operate(op, n1, n2){
    if (op === "+"){
        return add(n1,n2);
    }
    else if (op === "-"){
        return subtract(n1,n2); 
    }
    else if (op === "*"){
        return multiply(n1,n2); 
    }
    else if (op === "/"){
        return divide(n1,n2); 
    }
}
