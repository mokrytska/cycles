let out = document.querySelector('.out');
console.log(out);
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let out4 = document.querySelector('.out4');
let out5 = document.querySelector('.out5');

// 1) 3 рази вивести в консоль цифру 1

for (let i = 0; i < 3; i++) {
    console.log('1')
    out.innerHTML += 1;
}

// 2) Вивести в консоль 1,2,3


for (let i = 1; i < 4; i++) {
    console.log(i)
    out1.innerHTML += i;
}

// 3) Вивести в консоль 2,4,6. 

for (let i = 2; i <= 6; i = i + 2) {
    out2.innerHTML += i;
}
// 4) Вивести в консоль
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

for (let i = 0; i < 10; i = i + 1) {
    for (let k = 0; k < i; k++) {
        out3.innerHTML += '*';
    }
    out3.innerHTML += '<br>';
}

// 5) Пройтись циклом по числам від 0 до 10, якщо число парне, то вивести в консоль саме число, якщо не парне,то вивести  0


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } 
    else {
        console.log(0)
    }
}

// 6) Створити строку “I don’t know javascript”. Вивести в консоль кожен символ строки
let str = 'I dont know javascript';
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

// 7) Створити масив [1,2,3,4,5,6]. Вивести в консоль кожен елемент масива

let arr = [1,2,3,4,5,6];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 8) Створити масив [1,-2,3,-4,5,-6].  Вивести в консоль тільки додатні числа

let arr1 = [1,-2,3,-4,5,-6];
for (let i = 0; i < arr.length; i++ ) {
    if (arr1[i] > 0) {
        console.log(arr1[i]);
    }
}
// 9) Створити масив [4,5,1,-2,3,-4,5,-6].  Вивести в консоль тільки парні числа

let arr2 = [4,5,1,-2,3,-4,5,-6];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
        console.log(arr2[i]);
    }
}

// 10) Створити масив [1,2,0,false,null,undefined,[],{},’’,‘true’].
// Вивести в консоль тільки істинні значення, тобто значення, які при приведенні до boolen вертають true



// 11) Вивести в консоль суму чисел від 0 до 10

let sum = 0;
for (let i = 0; i <= 10; i++ ) {
sum = sum + i;
}
console.log(sum);

// 12) Створити масив [5,6,7,8,9,1,2,3,4]. Вивести в консоль суму чисел

let arr3 = [5,6,7,8,9,1,2,3,4];
let sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
    sum2 = sum2 + arr3[i];
}
console.log(sum2);

// 13) Створити масив [4,5,6,1,2,3,7,8,9]. Вивести в консоль [’2’,’3’,’4’,‘1’,’5’,’6’,’7’,’8’,’9’]




// 14) Створити масив [‘i’,’ ’,’d’,’o’,’n’,’`’,’t’,’ ’,’k’,’n’,’o’,’w’,’ ’,’j’,’s’]. За допомогою циклу зконкатенувати всі елементи масива в одну строку. Вивести в консоль “i don’t know js”
let arr4 =  ['i',' ' ,'d','o','n','" ','t',' ','k','n','o','w',' ','j','s'];
let ps = ' ';
for (let i = 0; i < arr4.length; i++) {
    ps += arr4[i]; 
}
console.log(ps);




