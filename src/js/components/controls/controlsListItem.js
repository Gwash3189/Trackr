var React = require("react");

var ControlsListItem =
    React.createClass({
        getInitialState: function () {
            return {
                text: this.props.text,
                clickHandler: this.props.clickHandler,
                id: this.props.id
            }
        },
        render: function () {
            return (
                  <button className="btn btn-primary btn-block" id={this.state.id} onClick={this.state.clickHandler}>{this.state.text}</button>
            )
        }
    });


module.exports = ControlsListItem;