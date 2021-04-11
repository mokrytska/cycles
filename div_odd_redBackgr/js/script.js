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
  

//  16) Створити в html 10 елементів div розміром 20х20.В кожному написати одне число від -5 до 5. Взяти всі div з DOM. Пройтись по ним циклом і кожному div звід”ємним числом задати червоний бекграунд, а з додатнім - зелений

 let div2 = document.querySelector('.one');
console.log(div2);
for (let i = 0; i <= div.length; i++) {
    if (div[i] <= 0) {
        div[i].style.background = 'red';
    }
    else {
       div[i].style.background = 'green'; 
    }
}


