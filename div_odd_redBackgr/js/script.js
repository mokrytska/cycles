// <!-- 15) Створити в html 10 елементів div розміром 20х20. Взяти всі div з DOM. Пройтись по ним циклом і кожному парному задати червоний бекграунд, а непарному - зелений -->
let div = document.querySelectorAll('.two');
console.log(div);
 for (let i = 0; i <= div.length; i++) {
     if (i % 2 === 0) {
         div[i].style.background = 'red';
     }
     else {
        div[i].style.background = 'green'; 
     }
 }
  




