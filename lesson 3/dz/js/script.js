let button = document.querySelector ('.button-1');
let input = document.querySelector('.in-1');
let div = document.querySelector('.out-1');

button.onclick = () => {
    let num = +input.value;
    if (num == 4) {
        console.log(true); 
        document.querySelector('.out-1').innerHTML = 'true';
    } 
    else {
        console.log(false);
        document.querySelector('.out-1').innerHTML = 'false';
    }     
    

}