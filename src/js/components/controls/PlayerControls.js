var PlayerActions = require("./../../actions/players/playerActions");
module.exports = function(obj) {
    obj = obj || {};
    obj.text = "Add Player";
    obj.clickHandler = function() {
            PlayerActions.addPlayer({name: "John", hp: 3});
    };
    obj.id = 1;
    return obj;
};