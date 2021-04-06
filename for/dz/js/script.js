// // Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let out1 = ' ';
let b1 = document.querySelector('.b1');

b1.addEventListener('click', function() {
    for (let i = 1; i <= 50; i = i + 1) {
        out1 += i + ' ';
        }
        document.querySelector('.out-1').innerHTML = out1; 
}
)

// Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:

// 2 4 6 ... 122

// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

let out2 = ' ';
let b2 = document.querySelector('.b2');
b2.addEventListener('click', function() {
    for (let i = 2; i <= 122; i = i + 2) {
        out2 += i + ' ';
        }
        document.querySelector('.out-2').innerHTML = out2;
} )


let out3 = ' ';
let b3 = document.querySelector('.b3');
b3.addEventListener('click', function() {
    for (i = 27; i >= 7; i = i - 1) {
        out3 += i + ' ' ;
    }
    document.querySelector('.out-3').innerHTML = out3;
}  )

