var React = require("react");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayersList = require("./playersList");
var playerMixin = require("../../mixins/playerMixin");
var FloatingActionButton = require("./../common/floatingActionButton");
var PlayerActions = require("./../../actions/players/playerActions");
var Navigation = require("react-router").Navigation;

var Player =
    React.createClass({
        mixins:[Navigation],
        getInitialState: function () {
            return {
                players: PlayerStore.getStoreInitialState()
            }
        },
        addPlayerToList: function() {
            var player = playerMixin();
            PlayerActions.addPlayer(player);
            // this.transitionTo("player", {id: player.id});
        },
        render: function () {
            return (
                <div className="col-xs-12 main">
                    <h1 className="page-header">Players</h1>
                    <PlayersList/>
                    <FloatingActionButton className="btn-primary" onClick={this.addPlayerToList}>
                        <i className="fa fa-plus fa-2x"></i>
                    </FloatingActionButton>
                </div>
            )
        }
    });

module.exports = Player;
