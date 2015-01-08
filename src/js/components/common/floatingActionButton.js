var React = require("react/addons");

var PlayersList =
    React.createClass({
        render: function () {
            var classes = "floating-action-button btn-circle position-fixed" + " " + this.props.className;
            return (
                <button onClick={this.props.onClick} className={classes}>{this.props.children}</button>
            )
        }
    });


module.exports = PlayersList;