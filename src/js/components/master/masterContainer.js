var React = require("react");
var Link = require('react-router').Link;
var $ = require("jquery");
var {RouteHandler} = require("react-router");

var masterContainer =
    React.createClass({
        componentDidMount: () => {
            $("a.active").parent().addClass("active");
        },
        render: () => {
            return (
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid nav-bar-container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="fa fa-bars"></span>
                                </button>
                                <a className="navbar-brand" href="#">Trackr</a>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <Link to="players">
                                            <span ref="playersLongName">Players</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a>
                                            <span ref="monstersLongName" >Monsters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span ref="encountersLongName" >Encounters</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12">
                                <RouteHandler></RouteHandler>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    });

module.exports = masterContainer;