// add function
function add(a,b){ return a + b; }

// subtract function
function subtract(a,b){ return a - b; }

// multiply function
function multiply(a,b){ return a * b; }

// divide function
function divide(a,b){
    if (b === 0){
        alert("please... i beg... you cannot divide by zero!");
        clearCalc();
        return "0";
    }
    return a / b; 
}

// initialise variables
var num1 = "";
var num2 = "";
var operator = "";
var currentInput = "0"

// operate function to handle operation method calls
function operate(op, n1, n2){
    const operations = { "+": add, "-": subtract, "*": multiply, "/":divide};
    return operations[op] ? operations [op] (n1,n2) : "0";
}


function clearCalc(){
    paintDisplay("0");
    currentInput = "0";
    num1 = "";
    num2 = "";
    operator = "";
}

// setup calculator visuals
const container = document.querySelector("#calculator");
const display = document.createElement("div");
display.textContent = "0";
display.classList.add("display");
calculator.appendChild(display);


// creating row div, symbol array
rows = document.createElement("div");
rows.classList.add("rows");
calculator.appendChild(rows);

// array for button labels / symbols
const symbols = [
    ["AC", "+/-","%","/"],
    ["7","8","9","*"],
    ["4","5","6","-"],
    ["1","2","3","+"],
    ["0",".","="]]


//creating first four identical rows 
for(let i = 0; i < 4; i++){
    const row = document.createElement("div");
    row.classList.add(`row${i}`)
    rows.appendChild(row);

    // button row loop
    for (let j = 0; j < 4; j++){
        const btn = document.createElement("button");
        btn.value = symbols[i][j]
        btn.textContent = (btn.value)
        btn.classList.add(`button${i}${j}`);
        row.appendChild(btn);
        btn.addEventListener("mouseup",buttonPressed);
    }
}

//creating last button row separately due to sizing differences
const lastRow = document.createElement("div");
lastRow.classList.add("row4")
rows.appendChild(lastRow);

symbols[4].forEach((symbol, k) => {
    const btn = document.createElement("button");
    btn.value = symbol;
    btn.textContent = symbol;
    btn.classList.add(`button4${k}`);
    lastRow.appendChild(btn);
    btn.addEventListener("mouseup",buttonPressed);
});

function buttonPressed(evt){
    let symbol = evt.currentTarget.value;
    console.log(`You just pressed: ${symbol}`);
    console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}, currentInput: ${currentInput}`);

    // handling number input
    if(!isNaN(symbol)){
        currentInput = (currentInput !== "0") ? currentInput + symbol : symbol;
        paintDisplay(currentInput);
    }

    //handling operator input
    else if(["/","*","-","+"].includes(symbol)){

        //if symbol is pressed while all variables and operator have been set
        //acts as if = has been pressed, sets result as num1, and new operator
        if( num1 !== "" &&  operator !== "" && currentInput !== "0"){
            num2 = currentInput;
            num1 = operate(operator,Number(num1),Number(num2));
            currentInput = "0"
            num2 = "";
            paintDisplay(num1);
        }

        //if two operators are pressed in succession with no other input, operator is replaced
        else if(num1 !== "" &&  operator !== "" && currentInput === "0"){
            operator = symbol;
            paintDisplay(symbol);
        }

        //if symbol is pressed while no num defined
        //sets operator, sets num1 as current input, clears current input
        else {
            operator = symbol;
            num1 = currentInput;
            currentInput = "0";
            paintDisplay(symbol);
        }
    }

    // handling "=" input
    else if(symbol === "="){
        if( num1 !== "" &&  num2 === "" &&  operator !== ""){
            num2 = currentInput;
            console.log(num2);
            num1 = operate(operator,Number(num1),Number(num2)); 
            paintDisplay(num1); 
            currentInput = num1;
            num2 = "";
            operator = "";
        }
    }

    // handling % input
    else if(symbol === "%"){
        if (display.textContent === String(num1)){
            num1 = num1 * 0.01;
            paintDisplay(num1);
        } else if (display.textContent === String(currentInput)) {
            currentInput = currentInput * 0.01;
            paintDisplay(currentInput);
        }
    }

    // handling +/- input
    else if(symbol === "+/-"){
        if (display.textContent === String(num1)){
            num1 = num1 * -1;
            paintDisplay(num1);
        } else if (display.textContent === String(currentInput)) {
            currentInput = currentInput * -1;
            paintDisplay(currentInput);
        }
    }

    // handling AC input
    else if(symbol === "AC"){
        clearCalc();
    }
    console.log("");
}

// function to update calc display
function paintDisplay(displayStr){
    display.textContent = displayStr;
}