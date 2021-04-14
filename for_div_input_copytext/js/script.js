// 18*) Створити в html 10 елементів input type text і 10 елементів div. Зробити так, щоб коли юзер щось друкує в першому інпуті, текст дублювався в перший дів.
// Якщо юзер друкує щось в другому інпуті, текст копіюється в другий дів.
// І так далі

let inputText = document.querySelectorAll('input');
let divs = document.querySelectorAll('div');
console.log(inputText);
console.log(divs);

for (let i = 0; i < inputText.length; i++) {
    inputText[i].addEventListener('keyup', function() {
        divs[i].textContent = inputText[i].value;
    })
}