import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js";

let BudgetBtn = document.getElementById('BudgetBtn');
let BudgetInput = document.getElementById('BudgetInput');
let BudgetText = document.getElementById('BudgetText');
let ExpenseBtn = document.getElementById('ExpenseBtn');
let ExpenseInput = document.getElementById('ExpenseInput');

let budgetNum;
let expenseNum;

// to reset localStorage
removeFromLocalStorage();

BudgetBtn.addEventListener('click', function() {
    removeFromLocalStorage();    
    budgetNum = Number(BudgetInput.value);
    saveToLocalStorage(budgetNum);
    console.log(localStorage.budget);
    
    BudgetText.innerText = localStorage.budget;
    
    if(BudgetText.innerText.startsWith('[')){
        BudgetText.innerText = BudgetText.innerText.slice(1);
    }
    if(BudgetText.innerText.endsWith(']')){
        BudgetText.innerText = BudgetText.innerText.slice(0, -1);  
    }
    
}); 

ExpenseBtn.addEventListener('click', function() {
    removeFromLocalStorage();
    expenseNum = Number(ExpenseInput.value);
    let budgetChange = budgetNum - expenseNum;
    console.log(budgetChange);
    saveToLocalStorage(budgetChange);

    BudgetText.innerText = budgetChange;
});