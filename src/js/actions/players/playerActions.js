var Reflux = require("reflux");

var PlayerActions = Reflux.createActions([
    "addPlayer",
    "removePlayer",
    "editPlayer"
]);

module.exports = PlayerActions;