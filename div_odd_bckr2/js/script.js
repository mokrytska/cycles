//  16) Створити в html 10 елементів div розміром 20х20.В кожному написати одне число від -5 до 5. Взяти всі div з DOM. Пройтись по ним циклом і кожному div звід”ємним числом задати червоний бекграунд, а з додатнім - зелений

let divs = document.querySelectorAll('div');
console.log(divs);
for (let i = 0; i < divs.length; i++) {
    if (divs[i].innerHTML <= 0) {
        divs[i].style.background = 'red';
    } else {
        divs[i].style.background = 'green';
    }
}
// 17) Створити в html 10 елементів input type checkbox. Взяти всі input з DOM. Пройтись по ним циклом і кожен парний позначити, як обраний


let checkbox = document.querySelectorAll('input');
console.log(checkbox);
for (let i = 0; i < checkbox.length; i++) {
    if (i % 2 === 0) {
        checkbox[i].checked = 'checked';
    }
}