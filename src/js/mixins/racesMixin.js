var mixin = require("./mixin");
module.exports = mixin( obj => {
    if(typeof obj === "string"){
        var o = {};
        o.value = obj;
        return o;
    }
    return obj;
});