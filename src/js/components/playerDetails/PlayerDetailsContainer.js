var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayerDetailsForm = require("./PlayerDetailsForm");
var State = require("react-router").State;
var Navigation = require("react-router").Navigation;



module.exports = React.createClass({
    mixins: [Reflux.ListenerMixin, State, Navigation],
    componentDidMount: function () {
        this.listenTo(PlayerStore, this.updatePlayer, this.updatePlayer);
    },
    getInitialState: function () {
        return {
            player: {}
        };
    },
    updatePlayer: function (players) {
        var newPlayer = this.getPlayer(players);
        if(newPlayer && newPlayer.id === undefined){
            this.transitionTo("players");
        } else {
            this.setState({
                player: newPlayer
            });    
        }
    },
    getPlayer: function (players) {
        return players.filter(x => {
            return x.id === this.getParams().id;
        })[0];
    },
    render: function () {
        return (
            <PlayerDetailsForm player={this.state.player}></PlayerDetailsForm>
        )
    }
});
