let a = 9;

// if  (a!=9)  {
//     //true
//     console.log('yes');
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () =>  {
    let num = +input.value;
    if (num >= 16 && num < 60) {  //& - оператор і
        console.log ('welcome');
    }
    else if (num>60){
        console.log('ты точно сюда?')
    }
    else{
        console.log('ты не пройдёшь!!!')
    }
 switch(num){
     case 15:
         console.log('wait');
         break;
    case 16:
        console.log('great you can');
        break;
        default:
            console.log('okkk');
 }
}
let b = 4;
console.log (b ==  3  || b == 7);