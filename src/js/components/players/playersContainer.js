var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayersList = require("./playersList");
var Navigation = require("react-router").Navigation;
var State = require("react-router").State;
var Search = require("./../search/search");
var SearchActions = require("./../../actions/search/search");
var SearchStore = require("./../../stores/search/SearchStore");


var Player =
    React.createClass({
        mixins: [Navigation, State, Reflux.ListenerMixin],
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
        updateSearchList: function (searchList) {
            this.setState({
                searchList: searchList || [],
                showSearchOnly: true
            });
        },
        search: function (value) {
            if(value === ""){
                this.setState({
                    showSearchOnly: false
                });
            } else {
                SearchActions.search(value, this.state.searchList);
            }
        },
        whileSearching: function(value) {
            this.transitionTo("search", {search: value});
        },
        whileNotSearching: function() {
            this.transitionTo("players");
        },
        render: function () {
            return (
                <div className="row">
                    <div className="col-xs-12 main">
                        <Search searchBy={this.search} goToWhenSearching={this.whileSearching} goToWhenNotSearching={this.whileNotSearching} disabled={this.state.players.length === 0}></Search>
                        {
                            <PlayersList players={this.state.players}/>
                        }
                    </div>
                </div>
            )
        }
    });
module.exports = Player;



