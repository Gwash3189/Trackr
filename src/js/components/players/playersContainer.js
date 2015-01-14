var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayersList = require("./playersList");
var Navigation = require("react-router").Navigation;
var RouteHandler = require('react-router').RouteHandler;


var Player =
    React.createClass({
        mixins: [Navigation, Reflux.ListenerMixin],
        getInitialState: function () {
            return {
                players: []
            };
        },
        componentDidMount: function () {
            this.listenTo(PlayerStore, this.updatePlayers, this.updatePlayers);
        },
        updatePlayers: function (players) {
            this.setState({
                players: players
            });
        },
        render: function () {
            return (
                <div className="row">
                    <div className="col-xs-4 main">
                        <h1 className="page-header">Players</h1>
                        <PlayersList players={this.state.players}/>
                    </div>
                    <div className="col-xs-8">
                        <RouteHandler/>
                    </div>
                </div>
            )
        }
    });
module.exports = Player;
