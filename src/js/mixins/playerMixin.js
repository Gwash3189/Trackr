var guidMaker = require("./../components/common/guidMaker");
var mixin = require("./mixin");
module.exports = mixin( obj => {
        obj.name = obj.name || "New Player";
        obj.class = obj.class || "Class";
        obj.race = obj.race || "Race";
        obj.id = obj.id || guidMaker();
        obj.playerName = obj.playerName || "";
        obj.imageSource = obj.imageSource || "http://placehold.it/599x604";
        obj.initiativeModifier = +obj.initiativeModifier || 0;
        obj.totalHealth = +obj.totalHealth || 0;
        return obj;
});
