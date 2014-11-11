var React = require("react");
var ListContainer = require("./../common/listContainer");
var PlayerActions = require("./../../actions/players/playerActions");
var ControlsListItem = require("./controlsListItem");

var Controls =
    React.createClass({
        classes: {
            "list-unstyled": true,
            "well well-sm": true
        },
        getInitialState: function() {
            return {
                controls: [
                    require("./PlayerControls")()

                ]
            }
        },
        renderControlsItem: function(item) {
            return <ControlsListItem id={item.id} text={item.text} clickHandler={item.clickHandler} />
        },
        render: function() {
            return <ListContainer classes={this.classes} list={this.state.controls}  renderListItem={this.renderControlsItem}/>;

        }
    });

module.exports = Controls;