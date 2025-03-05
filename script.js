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
        btn.textContent = (symbols[i][j])
        btn.classList.add(String("button" + i + j));
        row.appendChild(btn);
    }
}

//creating last button row separately due to sizing differences
const row = document.createElement("div");
row.classList.add("row4")
rows.appendChild(row);
for (let k = 0; k < 3; k++){
    const btn = document.createElement("button");
    btn.textContent = (symbols[4][k])
    btn.classList.add(String("button" + 4 + k));
    row.appendChild(btn);
}