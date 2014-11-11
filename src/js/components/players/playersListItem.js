var React = require("react");

var PlayersListItem =
    React.createClass({
        getInitialState: function () {
            return {
                name: this.props.name,
                hp: this.props.hp
            }
        },
        render: function () {
            return (
                <div className="list-group-item">
                    <h4 className="list-group-item-heading">{this.state.name}</h4>
                    <div className="row">
                        <div className="col-xs-4">
                            <p className="list-group-item-text">
                                <strong>HitPoints</strong>: {this.state.hp}
                            </p>
                        </div>
                        <div className="col-xs-4">
                            <p className="list-group-item-text">
                                <strong>Initiative</strong>: {this.state.hp}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    });


module.exports = PlayersListItem;