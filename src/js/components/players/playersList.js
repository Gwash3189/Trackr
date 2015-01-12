var Reflux = require("reflux");
var React = require("react/addons");
var PlayerMixin = require("./../../mixins/playerMixin");
var PlayerActions = require("./../../actions/players/playerActions");
var playerMixin = require("../../mixins/playerMixin");
var PlayerListItem = require("./playersListItem");
var FloatingActionButton = require("./../common/floatingActionButton");
var Navigation = require("react-router").Navigation;


var PlayersList =
    React.createClass({
        mixins: [Navigation],
        createPlayerItem: function (x) {
            var p = PlayerMixin(x);
            return <PlayerListItem key={p.id} character={p}/>
        },
        addPlayerToList: function () {
            var player = playerMixin();
            PlayerActions.addPlayer(player);
            this.transitionTo("player", {id: player.id});
        },
        render: function () {
            return (
                <div>
                    <div className="row player-photos position-relative">
                        {this.props.players.map(this.createPlayerItem)}
                    </div>
                    <FloatingActionButton className="btn-primary" onClick={this.addPlayerToList}>
                        <i className="fa fa-plus fa-2x"></i>
                    </FloatingActionButton>
                </div>

            )
        }
    });


module.exports = PlayersList;