
// 1) Створити input type=range зі значенням від 0 до 100

let range = document.querySelector('input');
console.log(range);
let display = document.querySelector('span');
console.log(display);
   
range.addEventListener('input', function()
{ 
    // let value = range.value;
    // console.log (value);

    if (range.value >= 75) {
        console.log('too high');
        display.innerHTML = 'too high';
        display.style.background = 'blue';    
        }
    else if (range.value < 75 && range.value > 50) {
        display.innerHTML = 'normal';
        display.style.background = 'green';
    }
    else if (range.value <= 50 && range.value >=1) {
        display.innerHTML = 'too low';
        display.style.background = 'orange';
    }
    else {
        display.innerHTML = 'error';
        display.style.background = 'red';
    }
})

// 2) Створити input type=checkbox 


let checkbox = document.querySelector('.check');
console.log(checkbox);
let display2 = document.querySelector('.display2');
console.log(display2);
function handleCheckbox() {
    if (checkbox.checked) {
        display2.innerHTML = 'checked';
        display2.style.background = 'green';
        }
    else {
        display2.innerHTML = 'unchecked';  
        display2.style.background = 'white';
    }
}

checkbox.addEventListener('change',handleCheckbox);
handleCheckbox();

// // 3) Створити input type=text
// Поряд створити span
// При введенні тексту в інпут, вміст повинен дублюватись в спан
// * Якщо в інпут введено валідний колір (red, #e1e1e1, rgb(123,123,123)), то колір повинен задатись бекграундом для спана


let text = document.querySelector('.text');
console.log(text);
let display3 = document.querySelector('.display3');
console.log(display3);
let squear = document.querySelector('.width');
console.log(squear);

text.addEventListener('keyup', function() {
    
    display3.textContent = text.value;
    display3.style.background = text.value;
    if (text.value === 'none') 
    squear.style.display = 'none';
    else {
        squear.style.display = 'flex';
    }
})




// // 4) Створити два input type=number
// Поряд створити кнопку і span
// Потрібно вводити числа в інпути і при настиканні на кнопку потрібно вивести в спан суму чисел

let number1 = document.querySelector('.number1');
console.log(number1);
let number2 = document.querySelector('.number2');
console.log(number2);
let sum = document.querySelector('.button_sum');
console.log(sum);
let display4 = document.querySelector('.display4');
console.log(display4);
 
sum.addEventListener('click', function() {
    let a = +number1.value;
    let b = +number2.value;
    display4.innerHTML = a + b;
  })



//   <!-- task 5* 5)* Створити 4 input (text або number - по ситуації)
// Біля інпутів потрібно додати лейбли 1.background, 2.width, 3.height, 4.border-radius
// Поряд створити div
// Значення з полів використовувати як стилі для div
//  -->

let block = document.querySelector('.block');
console.log(block);
let background = document.querySelector('#background');
console.log(background);
let width = document.querySelector('#width');
console.log(width);
let height = document.querySelector('#height');
console.log(height);
let borderRadius = document.querySelector('#border-radius');
console.log(borderRadius);

background.addEventListener('keyup', function() {
    block.style.background = background.value;
})
width.addEventListener('input', function() {
    block.style.width = width.value + 'px';
})
height.addEventListener('input', function() {
    block.style.height = height.value + 'px';
})
borderRadius.addEventListener('input', function() {
    block.style.borderRadius = borderRadius.value + 'px';
})




