var Reflux = require("reflux");
var classMixin= require("./../../mixins/classMixin");
var ClassStore = Reflux.createStore({
    init: function () {
        this.classes = [
            classMixin("Figher"),
            classMixin("Wizard"),
            classMixin("Rogue"),
            classMixin("Cleric")
        ];
    },
    getInitialState: function () {
        return this.classes;
    }
});
module.exports = ClassStore;
