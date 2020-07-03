
//Utils

class Dictionary {

    dataStore = [];

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        if (this.dataStore[key]) delete this.dataStore[key];
        else return 'Not Found';
    }

    showAll() {
        for (var key in this.dataStore) {
            console.log(key + '->' + this.dataStore[key]);
        }
    }

    count() {
        var n = 0;
        for (var key in this.dataStore) {
            ++n;
        }
        return n;
    }

    clear() {
        for (var key in this.dataStore) {
            delete this.dataStore[key];
        }
    }
}