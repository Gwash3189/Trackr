var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayersList = require("./playersList");
var Navigation = require("react-router").Navigation;
var Search = require("./../search/search");


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
        search: function() {

        },
        render: function () {
            return (
                <div className="row">
                    <div className="col-xs-12 main">
                        <Search list={this.state.players} searchBy={this.search}></Search>
                        <PlayersList players={this.state.players}/>
                    </div>
                </div>
            )
        }
    });
module.exports = Player;



