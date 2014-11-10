var React = require("react");

var PlayersListItem =
    React.createClass({
        getInitialState: function() {
          return {
              name: this.props.name,
              hp: this.props.hp
          }
        },
        render: function() {
            return (
                <span ref="player">
                    <span ref="name">{this.state.name}</span>
                    <span ref="hp">{this.state.hp}</span>
                </span>
            )
        }
    });

module.exports = PlayersListItem;