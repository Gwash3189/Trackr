/** @jsx React.DOM */

var React = require("react");
var PlayersList = require("./players/playersContainer")

var Trackr =
    React.createClass({
        render: function () {
            return (
                <div>
                    <div>
                        <PlayersList />
                    </div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
    });

module.exports = Trackr;