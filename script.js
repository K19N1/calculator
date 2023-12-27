// Select elements
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

// Calculator variables  
let firstValue = 0;
let operator = '';
let secondValue = '';

// Add click event to buttons
buttons.forEach(button => {

  button.addEventListener('click', () => {

    // Number buttons
    if(button.classList.contains('number')){
      handleNumber(button.textContent); 
    }

    // Operator buttons
    if(button.classList.contains('operator')){
      handleOperator(button.textContent);
    }

    // Equals button
    if(button.id === 'equals'){
      operate();
    }

    // Clear button
    if(button.id === 'ac'){
      clear();
    }

  });

});

// Calculator functions
function handleNumber(num){
  // Logic to handle number buttons
}

function handleOperator(op){
  // Logic to handle operators  
}

function operate(){
  // Logic to operate on numbers
}

function clear(){
  // Logic to clear display
}