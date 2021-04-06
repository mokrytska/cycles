// document.querySelector('button').onclick = () => {
// console.log(document.querySelector('#one').value);



//  document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
//  console.log(document.querySelector('#one'))
//  document.querySelector('#one').oninput = () => {
//  console.log(document.querySelector('#one').value);
//  document.querySelector('span').innerHTML = (document.querySelector('#one').value);
//  }

const range = document.querySelector('#one');
const display = document.querySelector('span');
const button = document.querySelector ('button');
function handler() {
    const value = range.value;
    console.log(value);
    display.innerHTML = value;
    button.style.width = value + 'px';
    button.style.height = value + 'px';
    button.style.background = 'rgb(' + Math.random() * 255 + ','
    + Math.random() * 255 +  ',' + Math.random() * 255  + ')';
}
range.addEventListener('input',handler);


// document.querySelector('#btn-1').onclick = () => {
//     console.log(document.querySelector('#i-2').value);
//     let mycheckbox = document.querySelector('#i-2');
//     console.log(mycheckbox.checked);
//     if (mycheckbox.checked) {
//         console.log ('pushed');
//     }
//     else {
//         console.log('arentPushed');
//     }
// }
// document.querySelector('#btn-2').onclick = () => {
//     event.preventDefault();
//     // let text = document.querySelector('#two');
//     // console.log(text.value);
//     // text.value = 'one';
// let form = document.querySelector('form');
// console.log(form);
// console.log(form.elements.two.value);
// console.log(form.elements.three.value);
// }
// // останавливает собитие