var React = require("react");
var ListContainer = require("./../common/listConainer");

var Player =
    React.createClass({
        getInitialState: function() {
            return {
                players: [{name: "Adam", hp: 12, id: 1}]
            }
        },
        renderPlayerItem: function(item) {
            var PlayerListItem = require("./playersListItem");
            return <PlayerListItem name={item.name} hp={item.hp}/>
        },
        render: function() {
            debugger;
            return <ListContainer list={this.state.players}  renderListItem={this.renderPlayerItem}/>
        }
    });

module.exports = Player;