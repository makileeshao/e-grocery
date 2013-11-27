function storage_budget_saveBudget(sYYYYMM, sAmount){
    var boolStatus = false;
    try{
        var nAmount = parseFloat(sAmount);
        localStorage.setItem(sYYYYMM, nAmount);
        boolStatus = true;
    }
    catch(err){
        console.error('storage_budget_saveBudget() - ' + err.description);
    }
    
    return boolStatus;
}

function storage_budget_retrieveBudget(sYYYYMM){
    return parseFloat(localStorage.getItem(sYYYYMM));
}
