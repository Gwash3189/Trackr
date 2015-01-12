var Reflux = require("reflux");
var classMixin= require("./../../mixins/classMixin");
var RacesStore = Reflux.createStore({
    init: function () {
        this.races = [
            classMixin("Human"),
            classMixin("Dwarf"),
            classMixin("Elf"),
            classMixin("Halfing")
        ];
    },
    getInitialState: function () {
        return this.races;
    }
});
module.exports = RacesStore;
