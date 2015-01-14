var React = require("react");
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var masterContainer =
    React.createClass({
        render: function () {
            return (
                <div>
                    <RouteHandler/>
                </div>
            );
        }
    });

module.exports = masterContainer;
