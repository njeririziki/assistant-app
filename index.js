
const numberBtns = document.querySelectorAll('.number')
const operandBtns = document.querySelectorAll('.operand')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const equalsBtn = document.getElementById('equals')


let currentoperand = '';
let previousoperand = '';
let operation = undefined;
const addNumber=(number)=>{
    if(number === '.' && currentoperand.includes('.')) return;
   currentoperand=  currentoperand.toString() + number.toString();
}

const updateDisplay=()=>{
   input.innerText= previousoperand.toLocaleString("en") ;
   output.innerText= currentoperand;
}

const chooseOperation =(operand)=>{
 if (currentoperand === '') return
operation = operand;
previousoperand = currentoperand;
currentoperand = '';
}

const compute=()=>{
    let computation
    const current = parseFloat(currentoperand)
    const prev = parseFloat(previousoperand)
    if (isNaN(prev) || isNaN(current)) return
 switch(operation){
     case '+':
        computation=prev+current
         break;
     case '-':
        computation=prev-current
        break;
     case '×':
      computation=prev*current
        break;
    case '÷':
        computation=prev/current
      break;
      default:
 }
 previousoperand = currentoperand;
  currentoperand= computation;
  operation = undefined;
   previousoperand = ''
}



const clear =()=>{
     currentoperand = '';
     previousoperand = '';
     operation = undefined;
}
const del =()=>{
    currentoperand = currentoperand.toString().slice(0,-1)
}


numberBtns.forEach(button=>{
    button.addEventListener('click', ()=>{
      addNumber(button.innerText)
       updateDisplay()
    
    })
})
operandBtns.forEach(button=>{
    button.addEventListener('click', ()=>{
        addNumber(button.innerText)
       chooseOperation(button.innerText);
       updateDisplay()
    })
})

equalsBtn.addEventListener('click', button =>{
   // onEquals();
    compute();
    updateDisplay()
})
clearBtn.addEventListener( 'click',()=>{
   clear();
   updateDisplay()
})

deleteBtn.addEventListener( 'click',()=>{
    del();
    updateDisplay()
 })


 // bugs - only one operator;
 // output format
 // put all the numbers in the input section