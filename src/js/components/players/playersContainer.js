var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayersList = require("./playersList");
var Navigation = require("react-router").Navigation;
var State = require("react-router").State;
var Search = require("./../search/search");
var Searchable = require('./../../mixins/searchableComponentMixin');

var Player =
    React.createClass({
        mixins: [Navigation, State, Reflux.ListenerMixin, Searchable],
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
                players: players || []
            });
        },
        render: function () {
            return (
                <div className="row">
                    <div className="col-xs-12 main">
                        <Search defaultSearchValue={x => x.name} list={this.state.players} searchBy={this.search} disabled={this.state.players.length === 0}></Search>
                        <PlayersList players={ this.state.showSearch === true ? this.state.searchList : this.state.players}/>
                    </div>
                </div>
            )
        }
    });
module.exports = Player;



