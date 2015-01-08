var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var React = require("react/addons");
var PlayerMixin = require("./../../mixins/playerMixin");
var PlayerListItem = require("./playersListItem");

var PlayersList =
    React.createClass({
        mixins: [Reflux.ListenerMixin],
        getInitialState: function () {
            return {
                players: []
            }
        },
        componentDidMount: function () {
            this.listenTo(PlayerStore, this.updatePlayers, this.updatePlayers);
        },
        updatePlayers: function (players) {
            this.setState({
                players: players
            });
        },
        createPlayerItem: function (x) {
            var p = PlayerMixin(x);
            return <PlayerListItem key={p.id} character={p}/>
        },
        render: function () {
            return (
                <div className="row player-photos position-relative">
                    {this.state.players.map(this.createPlayerItem)}
                </div>
            )
        }
    });


module.exports = PlayersList;