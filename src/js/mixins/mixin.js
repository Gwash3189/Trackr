module.exports = func => {
    return function(obj) {
        obj = obj === undefined ? {} : obj;
        return func(obj);
    }
};