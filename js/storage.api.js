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

function storage_addProduct(sName, sPrice, sRemarks){
    var objProduct = new Object();
    var nPrice = parseFloat(sPrice);
    
    // generate index (length + 1)
    var arrProducts = storage_getProducts();
    objProduct.id = arrProducts.length;
    objProduct.name = sName;
    objProduct.price = nPrice;
    objProduct.remarks = sRemarks;
    
    arrProducts[objProduct.id] = objProduct;
    localStorage.setItem(LS_KEY_PRODUCT_LIST, JSON.stringify(arrProducts));
}

function storage_removeAllProducts(){
    var arrProducts = storage_getProducts();
    arrProducts.splice(0, arrProducts.length);
    
    console.log('after cleaing... ' + JSON.stringify(arrProducts));
    localStorage.setItem(LS_KEY_PRODUCT_LIST, JSON.stringify(arrProducts));
}

function storage_RefreshList_UL(element_id){
    console.log('element_id: ' + element_id);
    $('#' + element_id).empty();
    
    var arrProducts = storage_getProducts();
    console.log('storage_RefreshList_UL() ' + arrProducts.length);
    if(arrProducts.length > 0){
        var sItemList = "<ul data-role='listview'>";
        for(var i = 0; i < arrProducts.length; i++){
            sItemList = sItemList + '<li>' + arrProducts[i].name + '</li>';
        }
        sItemList = sItemList + '</ul>';
        console.log('sItemList: ' + sItemList);
        
        console.log('div-html-before: ' + $('#' + element_id).html());
        $('#' + element_id).html(sItemList);
        $('#' + element_id).page();
        console.log('div-html-after: ' + $('#' + element_id).html());
    }
    else{
        $('#' + element_id).html('<li>(no item)</li>');
    }
}

// Budget
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



