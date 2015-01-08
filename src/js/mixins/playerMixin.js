var guidMaker = require("./../components/common/guidMaker");
var mixin = require("./mixin");
module.exports = mixin( obj => {
        obj.name = obj.name || "New Player";
        obj.hp = obj.hp || 0;
        obj.class = obj.class || "Class";
        obj.race = obj.race || "Race";
        obj.id = obj.id || guidMaker();
        return obj;
});