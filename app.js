const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');
keys.addEventListener('click', clickButton);
function clickButton(e){
    if (e.target.matches('button')) {
        let number = 0 ;
        let key = e.target;
        let action = key.dataset.action;
        if(!action) {
            console.log('number key!')
            if(display.innerHTML==='0'){
                display.innerHTML = key.innerHTML; 
            }else{
                key.innerHTML.appendChild(display);
            }
        } 
        if(action === 'add' || action === 'subtract' || action === 'multiply' ||  action === 'divide') 
        {
            console.log('operator key!')
        }
        if(action === 'decimal'){
            console.log('decimal key!')
        }
        if(action === 'clear'){
            console.log('clear key!')
        }
        if(action === 'calculate'){
            console.log('equal key!')
        }
    }
}