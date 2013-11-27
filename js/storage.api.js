var BUDGET = 'budget-';
var LS_KEY_PRODUCT_LIST = 'products';

// setup
function setupStorage(){
    // localStorage.clear();
    
    // init products
    if(localStorage.getItem(LS_KEY_PRODUCT_LIST)){
        console.log('existing setup');
    }
    else{
        console.log('setting up products...');
        
        var arrProducts = new Array(1);
        var index = -1;
        
        index++;
        var objProduct = new Object();
        objProduct.id = index;
        objProduct.name = 'Haha';
        objProduct.price = 10;
        objProduct.remarks = 'test product ' + index;
        arrProducts[index] = objProduct;
        
        index++;
        objProduct = new Object();
        objProduct.id = index;
        objProduct.name = 'Haha';
        objProduct.price = 10;
        objProduct.remarks = 'test product ' + index;
        arrProducts[index] = objProduct;
        
        console.log('clearing localstorage...');
        localStorage.clear();
        
        console.log('loading data into localstorage...');
        console.log('storing: ' + JSON.stringify(arrProducts));
        localStorage.setItem(LS_KEY_PRODUCT_LIST, JSON.stringify(arrProducts));
    }
}

function storage_getProducts(){
    return JSON.parse(localStorage.getItem(LS_KEY_PRODUCT_LIST));
}

function storage_budget_saveBudget(sYYYYMM, sAmount){
    var boolStatus = false;
    try{
        var nAmount = parseFloat(sAmount);
        localStorage.setItem(BUDGET + sYYYYMM, nAmount);
        boolStatus = true;
    }
    catch(err){
        console.error('storage_budget_saveBudget() - ' + err.description);
        e_alert('Error: ' + err.description);
    }
    
    return boolStatus;
}

function storage_budget_retrieveBudget(sYYYYMM){
    return parseFloat(localStorage.getItem(BUDGET + sYYYYMM));
}



