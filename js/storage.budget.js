function storage_budget_saveBudget(sYYYYMM, sAmount){
    var boolStatus = false;
    try{
        var nAmount = parseFloat(sAmount);
        localStorage.setItem(sYYYYMM, nAmount);
        boolStatus = true;

        var objTest = new Object();
        objTest.budgetDate = sYYYYMM;
        objTest.amount = nAmount;

        var sCheck = JSON.stringify(objTest);
        e_alert(sCheck);
    }
    catch(err){
        console.error('storage_budget_saveBudget() - ' + err.description);
        e_alert('Error: ' + err.description);
    }
    
    return boolStatus;
}

function storage_budget_retrieveBudget(sYYYYMM){
    return parseFloat(localStorage.getItem(sYYYYMM));
}
