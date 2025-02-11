function getLocalStorage(){
    let localStorageData = localStorage.getItem('budget');
    return JSON.parse(localStorageData) || [];
}

function saveToLocalStorage(budget) {
    
    let budgetArr = JSON.parse(localStorage.getItem("budget")) || [];
    budgetArr.push(budget);
    let secondArr = [];
    for(let i = 0; i < budgetArr.length; i++){
        if (!secondArr.includes(budgetArr[i])) {
            secondArr.push(budgetArr[i]);
            
        }
    }
    localStorage.setItem('budget', JSON.stringify(secondArr));

    console.log(secondArr);
}

function removeFromLocalStorage(budget){
    let budgetArr = getLocalStorage();

    

    let budgetIndex = budgetArr.indexOf(budget);

    //remove the name from the array using the splice method.
    //Start at the index of name and remove 1 item
    budgetArr.splice(budgetIndex, 1);

    // save updated array to local storage
    localStorage.setItem('budget', JSON.stringify(budgetArr));
}

export { getLocalStorage, saveToLocalStorage, removeFromLocalStorage }