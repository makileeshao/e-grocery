var DEBUG = 1;

function e_alert(message){
    // navigator.notification.alert(message, null, 'Alert', 'OK');
    // alert(message);
    console.log(message);
}

function e_log(message){
    console.log(message);
}

function e_error(message){
    console.error(message);
}

// console.log(message);
// console.error(message);

function e_getDeviceInfo(){
    var info = 'Name: ' + device.name + '<br />';
    info = info + 'Cordova: ' + device.cordova + '<br />';
    info = info + 'Platform: ' + device.platform + '<br />';
    info = info + 'UUID: ' + device.uuid + '<br />';
    info = info + 'Version: ' + device.version + '<br />';   
    
    return info;
}


