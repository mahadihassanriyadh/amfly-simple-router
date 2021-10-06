// db refers to database

const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
/* 
    if (db[item]) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
*/
    saveToDb(db);
}

const removeFromDb = item => {
    const db = getDb();
    if (item in db) {
        delete db[item];
        saveToDb(db);
    }
}

const saveToDb = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON);
}

const getDb = () => {

    const savedDb = localStorage.getItem('shopping-cart');
    return savedDb ? JSON.parse(savedDb) : {};

    /* 
    if (savedDb) {
        return JSON.parse(savedDb);
    }
    else {
        return {};
    }
     */
}

export { addToDb, removeFromDb, getDb };