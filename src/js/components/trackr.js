/** @jsx React.DOM */

var React = require("react");
var PlayersContainer = require("./players/playersContainer");
var ControlsContainer = require("./controls/controlsContainer");

var Trackr =
    React.createClass({
        render: function () {
            return (
                <div className="row">
                    <div className="col-xs-2">
                        <ControlsContainer />
                    </div>
                    <div className="col-xs-8">
                        <PlayersContainer />
                    </div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
    });

module.exports = Trackr;