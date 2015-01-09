var React = require("react");
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

var masterContainer =
    React.createClass({
        render: function () {

            return (
                <div>
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li className="active">
                                    <Link to="players">Players</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <RouteHandler/>
                </div>
            );
        }
    });

module.exports = masterContainer;
