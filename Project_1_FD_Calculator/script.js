
function calculatematurityamount() { 

    //fet the input values 

const principals = parseFloat(document.getElementById("principal").value); 
const intersrate = parseFloat(document.getElementById("Interest-Rate").value); 
const tenure = parseFloat(document.getElementById("Tenure").value); 

//perform the calculation 

const maturityamount = principals + (principals*intersrate*tenure)/100; 

//display the result 

document.getElementById("result").innerText = `Maturity amount is ${maturityamount.toFixed(2)}`; 

} 

//attatch the maturity amount 
const btn = document.getElementById("calculatebtn"); 
btn.addEventListener("click",calculatematurityamount); 
