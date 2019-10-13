var output;
var lastOperator;
var memory = ["",""];
var displayValue = "";

function number(val) {
    displayValue += val;
    output.val(displayValue);
}

function operator(o) {
    if(store(output.val())) calculateResult();
    else
    {
        displayValue = "";
        output.val(displayValue);
    }
    lastOperator = o;
}

function calc() {
    if(store(output.val())) calculateResult();
}

function calculateResult() {
    var result;
    switch(lastOperator)
    {
        case "add": result = parseInt(memory[0],2) + parseInt(memory[1],2);
                        break;
        case "subtract": result = parseInt(memory[0],2) - parseInt(memory[1],2);
                        break;
        case "divide": result = parseInt(memory[0],2) / parseInt(memory[1],2);
                        break;
        case "mutiply": result = parseInt(memory[0],2) * parseInt(memory[1],2);
                        break;
    }
    result = parseInt(result,10).toString(2);
    displayValue = result;
    output.val(result);
    lastOperator = "";
    memory = ["",""];
}

function store(val) {
    if(memory[0]=="") {
        memory[0] = val;
        return false;
    }
    else {
        memory[1] = val;
        return true;
    } 
}

function clearScreen() {
    displayValue = "";
    output.val(displayValue);
    memory = ["",""];
}

function ans() {
    output.val(displayValue);
}

window.onload = function() {
    this.output = $("#answer");
    ans();
}