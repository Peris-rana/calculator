'use-strict';
function FindSum() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let sum = num1 + num2;
    alert(sum);
}
function FindSubtract() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let Subtract = num1 - num2;
    alert(Subtract);
}

function FindMul() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let Multiply = num1 * num2;
    alert(Multiply);
}
function FindDiv()
{
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let Div = num1 / num2
    alert(Div)
}

