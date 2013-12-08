var DEBUG = 1;

function e_alert(message){
    navigator.notification.alert(message, null, 'Alert', 'OK');
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


