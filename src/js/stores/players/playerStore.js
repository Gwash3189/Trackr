var Reflux = require("reflux");
var PlayerActions = require("./../../actions/players/playerActions");
var PlayerMixin = require("./../../mixins/playerMixin");
var LocalStorageMixin = require("./../../mixins/localStorageMixin");
var PlayerStore = Reflux.createStore({
    mixins: [LocalStorageMixin],
    init: function () {
        this.players  = this.setupLocalStorage("trackr-players") || [];
        this.listenTo(PlayerActions.addPlayer, this.addPlayer);
        this.listenTo(PlayerActions.removePlayer, this.removePlayer);
        this.listenTo(PlayerActions.editPlayer, this.editPlayer);
    },
    getInitialState: function () {
        return this.players;
    },
    getPlayer: function (playerId) {
        return this.players.filter(x => {
                if (x.id === playerId) {
                    return true;
                }
            })[0] || false;
    },
    addPlayer: function (playerToAdd) {
        this.players.push(PlayerMixin(playerToAdd));
        this.triggerList();
    },
    removePlayer: function (playerToRemove) {
        this.players = loopThroughAndFilter(this.players, playerToRemove);
        this.triggerList();
        function loopThroughAndFilter(array, item) {
            return array.filter(function (masterCopy) {
                    return Object.keys(item).some(function (key) {
                        if (masterCopy.hasOwnProperty(key)) {
                            if (item[key] !== masterCopy[key])
                                return true;
                        }
                    });
                }
            );
        }
    },
    editPlayer: function (editedPlayer) {
        this.players.map(function (x, i) {
            if (x.id === editedPlayer.id) {
                return i;
            }
        }).forEach(function (indexOfPlayerToEdit) {
            this.players[indexOfPlayerToEdit] = editedPlayer;
        }, this);
        this.triggerList();
    },
    triggerList: function () {
        this.trigger(this.players);
    }

});
module.exports = PlayerStore;
