var DEBUG = 1;

function e_alert(message){
    navigator.notification.alert(message);
}

// console.log(message);
// console.error(message);

function e_getDeviceInfo(){
    var info = device.name + '<br />';
    info = info + device.cordova + '<br />';
    info = info + device.platform + '<br />';
    info = info + device.uuid + '<br />';
    info = info + device.version + '<br />';   
    
    return info;
}