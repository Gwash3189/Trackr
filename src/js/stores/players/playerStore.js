var Reflux = require("reflux");
var PlayerActions = require("./../../actions/players/playerActions");
var ids = (function() {
    var ids = 0;
    return function(){
        ids = ++ids;
        return ids;
    }
})();
var PlayerStore = Reflux.createStore({
        init: function () {
            this.players = [{name: "Adam", hp: 12, id: ids()}];
            this.listenTo(PlayerActions.addPlayer, this.addPlayer);
            this.listenTo(PlayerActions.removePlayer, this.removePlayer);
            this.listenTo(PlayerActions.editPlayer, this.editPlayer)
        },
        getStoreIntialState: function() {
            return this.players;
        },
        addPlayer: function (playerToAdd) {
            debugger;
            playerToAdd.id = ids();
            this.players.push(playerToAdd);
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
                        })
                    }
                )
            }

        },
        editPlayer: function(editedPlayer){
            this.players.map(function(x, i){
                if(x.id === editedPlayer.id){
                    return i
                }
            }).forEach(function(indexOfPlayerToEdit) {
                this.players[indexOfPlayerToEdit] = editedPlayer;
            },this);
            this.triggerList();
        },
        triggerList: function () {
            this.trigger(this.players);
        }

    });
module.exports = PlayerStore;