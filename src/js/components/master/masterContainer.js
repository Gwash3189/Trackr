var React = require("react");
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;
var $ = require("jquery");

var masterContainer =
    React.createClass({
        toggleMenu: function(e) {
            $(this.refs.menu.getDOMNode()).toggleClass("active");
            e.preventDefault();
        },
        render: function () {
            return (
                <div id="wrapper" ref="menu" className="active">
                    <div id="sidebar-wrapper">
                        <ul id="sidebar_menu" className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a id="menu-toggle" href="#" onClick={this.toggleMenu}>Menu
                                    <span id="" className="fa fa-align-justify"></span>
                                </a>
                            </li>
                        </ul>
                        <ul className="sidebar-nav" id="sidebar">
                            <li>
                                <a>
                                    Players
                                    <span className="fa fa-link"></span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    Monsters
                                    <span className="fa fa-link"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div id="page-content-wrapper">
                        <div className="page-content inset">
                            <div className="row">
                                <div className="col-xs-12">
                                    <RouteHandler/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    });

module.exports = masterContainer;
