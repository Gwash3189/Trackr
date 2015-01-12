var React = require("react");
var Reflux = require("reflux");
var PlayerActions = require("./../../actions/players/playerActions");
var ClassStore = require("./../../stores/classes/classStore");
var RaceStore = require("./../../stores/races/RacesStore");
var SelectList = require("./../common/SelectList");
var Navigation = require("react-router").Navigation;


module.exports = React.createClass({
    mixins: [Navigation, Reflux.ListenerMixin],
    getInitialState: function() {
      return {
          classes: [],
          races: []
      }
    },
    handleChange: function(event) {
        var p = this.props.player;
        p[event.target.id] = event.target.value;
        PlayerActions.editPlayer(p);
    },
    componentDidMount: function(){
        this.listenTo(ClassStore, this.getClasses, this.getClasses);
        this.listenTo(RaceStore, this.getRaces, this.getRaces);
    },
    getClasses: function(classes) {
        this.setState({
            classes: classes
        });
    },
    getRaces: function(races) {
        this.setState({
            races: races
        });
    },
    goBackToPlayers: function() {
        this.transitionTo("players");
    },
    render: function() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">{this.props.player.name}</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Character Name</label>
                        <input id="name" className="form-control input-lg" value={this.props.player.name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="playerName">Player Name</label>
                        <input id="playerName" className="form-control input-lg" value={this.props.player.playerName} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class</label>
                        <SelectList className="form-control" id="class" list={this.state.classes}></SelectList>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class</label>
                        <SelectList className="form-control" id="class" list={this.state.races}></SelectList>
                    </div>
                </form>
                <button onClick={this.goBackToPlayers}> Done </button>
            </div>
        )
    }
});