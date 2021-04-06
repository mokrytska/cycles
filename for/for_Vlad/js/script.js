let out = document.querySelector('.out');
console.log(out);
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let out4 = document.querySelector('.out4');
let out5 = document.querySelector('.out5');

for (let i = 0; i < 3; i++) {
    console.log ('1')
   out.innerHTML += 1;
}

for (let i = 1; i < 4; i++) {
    console.log (i)
   out1.innerHTML += i;
}

for (let i = 2; i <= 6; i = i + 2) {
    out2.innerHTML += i;
}

for (let i = 0; i < 10; i = i + 1) {

    out3.innerHTML += '*' + '<br>';
}