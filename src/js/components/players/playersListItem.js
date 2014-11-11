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
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.name}</h3>
                    </div>
                    <div className="panel-body">
                        <p><strong>Health: </strong>{this.props.hp}</p>
                    </div>
                    <div class="panel-footer">
                        <div className="row">
                            <div className="col-xs-6">
                                <button className="btn btn-primary btn-block">Edit Player</button>
                            </div>
                            <div className="col-xs-6">
                                <button className="btn btn-danger btn-block">Delete Player</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    });


module.exports = PlayersListItem;