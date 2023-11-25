const keyNums = document.querySelectorAll('.keys')
const screenNum = document.querySelector('.screen-content')
const operator = document.querySelectorAll('.key--operator')
const answer = document.querySelector('.answer-screen')
let screenDisplay = screenNum.textContent
let isDecimal = false;
let isOperator = false;

keyNums.forEach(keyNum=>{
    keyNum.addEventListener('click',(e)=>{
        const key = e.target 
        const action = key.dataset.action  
        if(!action) {
            if(screenNum.textContent == '0') {
                screenNum.textContent = keyNum.textContent
              } 
              else {
            screenNum.textContent += keyNum.textContent
            isOperator = false
            }
        }
        else {
            if (action == 'clear') { 
                screenNum.textContent = 0
                answer.textContent = ''
                isDecimal = false
                isOperator = false
            } else if (action == 'decimal') { 
                if (!isDecimal) {
                    screenNum.textContent += keyNum.textContent
                    isDecimal = true
                }
            } else if (action == 'del') {
                if (screenNum.textContent === '0') {
                    return;
                } else {
                    screenNum.textContent = screenNum.textContent.slice(0, -1); 
                    isDecimal = false; 
                    isOperator = false;
                    if ( screenNum.textContent === ''){
                        screenNum.textContent = '0'
                    }
                }
            }
            else {
              screenDisplay = eval(screenNum.textContent);
              answer.textContent = screenDisplay
            }
        }
    })
})

operator.forEach(operator=>{
    operator.addEventListener('click',(e)=>{
        if (!isOperator) {
            screenNum.textContent += operator.innerHTML;
            isOperator = true     
            isDecimal = false; 
        }
    })
})
