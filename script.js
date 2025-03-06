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
var currentInput = "0"

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

//

container = document.querySelector("#calculator");
display = document.createElement("div");
display.textContent = "0";
display.classList.add("display");
calculator.appendChild(display);


//creating row div, symbol array
rows = document.createElement("div");
rows.classList.add("rows");
calculator.appendChild(rows);

const symbols = [["AC", "+/-","%","/"],["7","8","9","*"],
    ["4","5","6","-"],["1","2","3","+"],["0",".","="]]


//creating first four identical rows 
for(let i = 0; i < 4; i++){
    const row = document.createElement("div");
    row.classList.add(String("row" + i))
    rows.appendChild(row);
    for (let j = 0; j < 4; j++){
        const btn = document.createElement("button");
        btn.val = symbols[i][j]
        btn.textContent = (btn.val)
        btn.classList.add(String("button" + i + j));
        row.appendChild(btn);
        btn.addEventListener("mouseup",buttonPressed);
    }
}

//creating last button row separately due to sizing differences
const row = document.createElement("div");
row.classList.add("row4")
rows.appendChild(row);
for (let k = 0; k < 3; k++){
    const btn = document.createElement("button");
    btn.val = symbols[4][k]
    btn.textContent = (btn.val)
    btn.classList.add(String("button" + 4 + k));
    row.appendChild(btn);
    btn.addEventListener("mouseup",buttonPressed);
}

function buttonPressed(evt){
    let symbol = evt.currentTarget.val;
    if(!isNaN(symbol)){
        if(currentInput !== "0"){
            currentInput = currentInput + symbol;
        }
        else{
            currentInput = symbol;
        }
        paintDisplay(currentInput);
    }
    else if(["/","*","-","+"].includes(symbol)){
        console.log(num1);
        if(typeof num1 !== "undefined" && typeof num2 !== "undefined"
            && typeof operator !== "undefined"){
            console.log("test1");
            num1 = operate(symbol,num1,num2);
            operator = symbol;
            let num2;
            paintDisplay(num1);
        }
        else if(typeof num1 === "undefined" && typeof num2 === "undefined"){
            operator = symbol;
            num1 = currentInput;
            console.log("test2");
        }
    }
    else if(symbol === "="){
        if(typeof num1 !== "undefined" && typeof num2 === "undefined"
            && typeof operator !== "undefined"){
            console.log("test3");
            num2 = currentInput;
            num1 = operate(symbol,num1,num2); 
            paintDisplay(num1); 
            let num2;
            let operator;
        }
    }
    else if(symbol === "AC"){
        paintDisplay("0");
        let num1;
        let num2;
        let operator;
    }
}

function paintDisplay(displayStr){
    display.textContent = displayStr
}