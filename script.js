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

var num1 = "";
var num2 = "";
var operator = "";
var currentInput = "0"

function operate(op, n1, n2){
    console.log(op)
    if (op === "+"){
        return add(n1,n2);
    }
    else if (op === "-"){
        return subtract(n1,n2); 
    }
    else if (op === "*"){
        console.log(n1 + " * " + n2 + " = " + multiply(n1,n2))
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
    console.log(String("You just pressed:" + symbol));
    console.log(String("num1 is currently:", num1));
    console.log(String("num2 is currently:", num2));
    console.log(String("operator is currently:", operator));
    //check if symbol is a number
    if(!isNaN(symbol)){
        //if current input is not empty, concatenates numbers
        if(currentInput !== "0"){
            currentInput = currentInput + symbol;
        }
        //replaces empty current imput with number
        else{
            currentInput = symbol;
        }

        //updates display
        paintDisplay(currentInput);
    }
    else if(["/","*","-","+"].includes(symbol)){
        //if symbol is pressed while all variables and operator have been set
        //acts as if = has been pressed, sets result as num1, and new operator
        if( num1 !== "" && num2 !== ""
            &&  operator !== ""){
            console.log("trying");
            num1 = operate(operator,num1,num2);
            operator = symbol;
            let num2 = "";
            paintDisplay(num1);
        }

        //if symbol is pressed while no num defined
        //sets operator, sets num1 as current input, clears current input
        else if(num1 === ""){
            operator = symbol;
            num1 = currentInput;
            currentInput = "0";
        }
    }

    else if(symbol === "="){
        if( num1 !== "" &&  num2 === ""
            &&  operator !== "" && currentInput !== "0"){
            console.log(operator);
            num2 = currentInput;
            num1 = operate(operator,Number(num1),Number(num2)); 
            console.log(num1);
            paintDisplay(num1); 
            num2 = "";
            operator = "";
        }
    }

    //
    else if(symbol === "AC"){
        paintDisplay("0");
        currentInput = "0";
        let num1 = "";
        let num2 = "";
        let operator = "";
    }
}

function paintDisplay(displayStr){
    display.textContent = displayStr
}