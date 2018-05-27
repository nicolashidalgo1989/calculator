const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys'); 
keys.addEventListener('click', clickButton);
function clickButton(e){
    if (e.target.matches('button')) { 
        const key = e.target;
        const action = key.dataset.action;
        const nKey = key.textContent;
        const nDisplay = display.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;
        if(!action) {
            console.log('number key!');
            if( nDisplay === '0' || previousKeyType === 'operator'){
                display.textContent = nKey; 
            } else{ 
                display.textContent = nDisplay + nKey;
            }
        } 
        if(action === 'add' || action === 'subtract' || action === 'multiply' ||  action === 'divide') 
        {
            console.log('operator key!'); 
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator'; 
            calculator.dataset.firstValue = nDisplay;
            calculator.dataset.operator = action;
        }
        if(action === 'decimal'){
            console.log('decimal key!')
            display.textContent = nDisplay + nKey;
        }
        if(action === 'clear'){
            console.log('clear key!');
            display.textContent = 0;  
        }
        if(action === 'calculate'){
            console.log('equal key!');
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = nDisplay;
            display.textContent = calculate(firstValue, operator, secondValue);
            function calculate(n1, operator, n2){ 
                let result = '';
                if(operator==='add'){
                    result = parseFloat(n1) + parseFloat(n2);
                }else if(operator==='subtract'){
                    result = n1 - n2;
                }else if(operator==='multiply'){
                    result = n1 * n2;
                }else if(operator==='divide'){
                    result = n1 / n2;
                } 
                return result;
                console.log(result);
            }
        }
        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')) 
    }
}