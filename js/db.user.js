var DB_NAME = 'dbHome';
var DB_VERSION = '1.0';
var DB_DISPLAY_NAME = 'Home DB';
var DB_SIZE = 3 * 1024 * 1024;

function db_user_GetDatabase(){
    return window.openDatabase(DB_NAME, DB_VERSION, DB_DISPLAY_NAME, DB_SIZE);
}

function db_user_SetupDB(){
    console.log('db_user_SetupDB()');
    // console.error('db_user_SetupDB()');
    
    var objDB;
    try{
        objDB = db_user_GetDatabase();
        if(objDB){
            console.log('DB is now opened...');
        }
        else{
            console.error('Houston, we have a problem...');
        }
    }
    catch(err){
        e_alert('Error: ' + err.message);
        console.error(err.name);
        console.error(err.message);
        console.error(err.fileName);
        console.error(err.lineNumber);
        console.error(err.columnNumber);
    }
}

// DB operation
function errorCB(tx, err) {e_alert("Error processing SQL: "+err);}
function successCB(){e_alert("success!");}

function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

