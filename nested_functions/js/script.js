let out = document.querySelector('.out');
// for (let i = 0; i < 5; i++) {

//     for (let k = 0; k < 10; k++){
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

let out4 = document.querySelector('.out4');
for (let i = 1; i < 9; i++) {
    // out.innerHTML +='3*' + i + '=' + (i * 3) + '<br>';
    // out4.innerHTML += `3*${i}=${3 * i}<br>`;
    for (let k = 1; k < 10; k++) {
        out4.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out4.innerHTML += '<hr>';
}

// Task 1
// С помощью вложенных циклов, нарисуйте строку:

// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.



for (let i = 0; i < 3; i = i + 1) {
    for (let k = 0; k < 3; k++) {
        out.innerHTML += '*';
    }
    out.innerHTML += '_';
}

// С помощью вложенных циклов, нарисуйте строку:

// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.



let out2 = document.querySelector('.out2');
for (let i = 0; i < 3; i++) {
    out2.innerHTML += i + 1 + '<br>';
    for (let k = 0; k < 3; k++) {
        out2.innerHTML += '*_';
    }
    out2.innerHTML += '<br>';
}

// Task 3
// С помощью вложенных циклов, нарисуйте строку:

// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br, внутренний - звездочки, знак подчеркивания.

let out3 = document.querySelector('.out3');
for (let i = 0; i <= 3; i++) {
    for (let k = 0; k < 3; k++) {
        out3.innerHTML += '*_';
    }
    out3.innerHTML += '<br>';
}



let out5 = document.querySelector('.out5');
for (let i = 0; i < 10; i++) {
    let stars = '';
    for (let k = 0; k < i; k++) {
        stars += '*';
    }
    out5.innerHTML += stars;
    out5.innerHTML += '<br>';

}