var React = require("react");
var ListContainer = require("./../common/listContainer");
var PlayerActions = require("./../../actions/players/playerActions");
var ControlsListItem = require("./controlsListItem");

var Controls =
    React.createClass({
        getInitialState: function() {
            return {
                controls: [
                    {
                        text: "Click Me",
                        clickHandler: function() {
                            debugger;
                            PlayerActions.addPlayer({name: "John", hp: 3});
                        },
                        id: 1
                    }

                ]
            }
        },
        renderControlsItem: function(item) {
            debugger;
            return <ControlsListItem id={item.id} text={item.text} clickHandler={item.clickHandler} />
        },
        render: function() {
            return <ListContainer list={this.state.controls}  renderListItem={this.renderControlsItem}/>
        }
    });

module.exports = Controls;