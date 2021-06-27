
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


const chooseOperation =(operand)=>{
 if (currentoperand === '') return
operation = operand;
// 
// currentoperand = '';
}

const compute=()=>{
    let computation
    previousoperand = currentoperand;
    // const current = parseFloat(currentoperand)
    // const prev = parseFloat(previousoperand)
    console.log(`The question is ${previousoperand}`)
    if (previousoperand != '') {
        computation= eval(previousoperand);
        currentoperand= computation;
        return console.log(`The answer is ${computation}`)
    } else{
        return console.log(`not a valid argument `)
    }; 
   
}
 const cleanDisplay=(ans) =>{
    const res = parseFloat(ans.split('.')[0]);
     const result = res.toLocaleString("en") ;
    return result;
 }


const updateDisplay=()=>{
   input.innerText= previousoperand ;
   output.innerText= currentoperand.toLocaleString("en");
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
       chooseOperation(button.id);
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