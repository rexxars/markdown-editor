'use strict';

var hasStorage = null;

function checkLocalStorage() {
    var mod = 'test';
    try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
    } catch(e) {
        return false;
    }
}

module.exports = function hasLocalStorage() {
    if (hasStorage === null) {
        hasStorage = checkLocalStorage();
    }

    return hasStorage;
};
