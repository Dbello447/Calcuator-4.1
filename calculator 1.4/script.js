const display = document.getElementById('display')
const allNumbElements = document.getElementsByClassName('numb')
const allOperators = document.getElementsByClassName('operator')
const equalSign = document.getElementById('equal')



for (numb of allNumbElements){
  numb.addEventListener('click', function(e){
   display.textContent = display.textContent + e.target.innerHTML;
  })
}


for (operator of allOperators){
  operator.addEventListener('click', function(e){
    display.textContent = display.textContent + e.target.innerHTML;
  })
}


equalSign.addEventListener('click', function(){
  try{
    display.textContent = eval(display.textContent);
  } catch(error){
    display.textContent = "Error";
  }
})


function allClear(){
  return display.textContent = "";
}

function deleteBtn(){
  return display.textContent = display.textContent.slice(0, -1);
}