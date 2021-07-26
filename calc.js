const history = document.getElementById("h_value");
const output = document.getElementById("out_value");

const number = document.querySelectorAll(".number");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const remainder = document.getElementById("remainder");
const equals = document.getElementById("equals");
const clearOne = document.getElementById("CE");
const clearAll = document.getElementById("C");

function multiplication(a, b) {
    return a * b
}
function remaining(a, b) {
    return a % b
}
function division(a, b) {
    return a / b
}
function subtraction(a, b) {
    return a - b
}
function addition(a, b) {
    return a + b
}
function equalsTo(num) {
    output.innerText = num;
}

function printOnOutput(s) {
    output.innerText = s;
}
function printOnHistory(s) {
    history.innerText = s;
}

function addOnOutput(s) {
    return output.innerText + s;
}
function addOnHistory(s) {
    return history.innerText + s;
}

function resetHistory() {
    history.innerText = '';
}
function resetOutput() {
    output.innerText = '';
}

