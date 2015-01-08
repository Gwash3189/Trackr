var React = require("react/addons");
var Link = require('react-router').Link;
var ActiveState = require('react-router').ActiveState;

var masterListItem =
    React.createClass({
        mixins: [ ActiveState ],
        checkForDefaultRoute: function(def) {
            var rootRoute = "/";
            return window.location.href[window.location.href.length-1] === rootRoute && def === true;
        },
        render: function () {
            var active = this.props.activeClass || "active";
            var isActive = this.isActive(this.props.name, this.props.params, this.props.query) || this.checkForDefaultRoute(this.props.default);
            var className = isActive === true ? active : "";
            return (
                <li key={this.props.key} className={className}>
                    <Link to={this.props.name}>{this.props.displayName}</Link>
                    <span className="sr-only"></span>
                </li>
            )
        }
    });

module.exports = masterListItem;
