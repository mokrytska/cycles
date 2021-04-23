// 20***) Створити в html 1 елементи input type text, 1 елемент input type number і 1 елемент div. 
// Логіка така ж, як і в попередньому завданні, але в дів виводиться слово введене в input type text
// Для прикладу: 
// в input type text - ‘my text’
// в input type number - 4
// в дів виводиться - ‘my textmy textmy textmy text’

let text = document.querySelector('.text');
let number = document.querySelector('.number');
let square = document.querySelector('div');

function handler() {
    square.innerHTML = ' ';
    for (let i = 0; i < number.value; i++) {
        square.innerHTML += text.value;
    }
}
number.addEventListener('input', handler)
text.addEventListener('input', handler)