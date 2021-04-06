let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let button = document.querySelector('button');
let result = document.querySelector('div');


button.onclick = () => {
let a = +number1.value;
let b = +number2.value;
if (a > b) {
    document.querySelector('div').innerHTML = a;
}
else {
    document.querySelector ('div').innerHTML = b;
}
}
