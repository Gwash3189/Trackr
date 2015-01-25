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
                players: [],
                searchList: [],
                showSearchOnly: false
            };
        },
        componentDidMount: function () {
            this.listenTo(PlayerStore, this.updatePlayers, this.updatePlayers);
            this.listenTo(SearchStore, this.updateSearchList);
            var search = this.getParams().search;
            if(search){
                this.search(search);
            }
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
                        <Search value={this.getParams().search} searchBy={this.search} goToWhenSearching={this.whileSearching} goToWhenNotSearching={this.whileNotSearching}></Search>
                        {
                            (this.state.showSearchOnly && <PlayersList players={this.state.searchList}/>) ||
                            (this.state.players.length > 0 && <PlayersList players={this.state.players}/>)
                        }
                    </div>
                </div>
            )
        }
    });
module.exports = Player;



