// 19**) Створити в html 1 елемент input type number і 1 елемент div. Коли юзер вводить число в інпут, в дів виводиться слово “hello” відповідну кількість разів. 
// Для прикладу: юзер ввів 1 - в дів вивелось “hello”; юзер ввів 2 в дів вивелось “hellohello”


let input = document.querySelector('input');
console.log(input);
let text = document.querySelector('div');
console.log(text);

input.addEventListener('input', function () {
    text.innerHTML = ' ';
    for (let i = 0; i < input.value; i++) {
        text.innerHTML += 'hello ';
    }
})