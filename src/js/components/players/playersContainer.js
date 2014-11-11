var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var ListContainer = require("./../common/listContainer");
var PlayerListItem = require("./playersListItem");

var Player =
    React.createClass({
        mixins: [Reflux.ListenerMixin],
        componentDidMount: function () {
            this.listenTo(PlayerStore, this.updatePlayers, this.updatePlayers);
        },
        updatePlayers: function (players) {
            this.setState({
                players: players
            });
        },
        getInitialState: function () {
            return {
                players: PlayerStore.getStoreIntialState()
            }
        },
        renderPlayerItem: function (item) {
            return <PlayerListItem name={item.name} hp={item.hp}/>
        },
        render: function () {
            return <ListContainer list={this.state.players}  renderListItem={this.renderPlayerItem}/>
        }
    });

module.exports = Player;