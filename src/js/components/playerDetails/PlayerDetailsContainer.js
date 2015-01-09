var React = require("react");
var Reflux = require("reflux");
var PlayerStore = require("./../../stores/players/playerStore");
var PlayerDetailsForm = require("./PlayerDetailsForm");
var Navigation = require("react-router").Navigation;



module.exports = React.createClass({
    mixins: [Reflux.ListenerMixin],
    componentDidMount: function () {
        this.listenTo(PlayerStore, this.updatePlayer, this.updatePlayer);
    },
    getInitialState: function () {
        return {
            player: {}
        }
    },
    updatePlayer: function (players) {
        var newPlayer = this.getPlayer(players);
        if(this.isUndefinedPlayer(newPlayer)){
            this.transitionTo("players");
            return;
        }
        this.setState({
            player: this.getPlayer(players)
        });
    },
    isUndefinedPlayer: function(player) {
        if(player.id === undefined){
            return true;
        } else if (this.getPlayer() === undefined){
            return true;
        }
    },
    getPlayer: function (players) {
        return players.filter(x => {
            return x.id === this.props.params.id;
        })[0];
    },
    render: function () {
        return (
            <PlayerDetailsForm player={this.state.player}></PlayerDetailsForm>
        )
    }
});
