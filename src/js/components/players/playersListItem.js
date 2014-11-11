var React = require("react/addons");

var PlayersListItem =
    React.createClass({
        classes: {
            "hide-input": true,
            "form-group": true
        },
        getInitialState: function () {
            return {
                name: this.props.name,
                hp: this.props.hp
            }
        },
        editPlayer: function() {
            this.setState({
                hideInput: false
            })
        },
        render: function () {
            inputClasses = React.addons.classSet(this.classes);
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-11">
                                <h3 className="panel-title">{this.state.name}</h3>
                            </div>
                            <div className="col-xs-1">
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <p>
                            <strong>Health: </strong>{this.state.hp}
                        </p>
                        <div className={inputClasses}>
                            <label for="healthInput"><strong>Health</strong></label>
                            <input ref="healthInput" type="number" className="form-control" id="healthInput" placeholder="-12" />
                        </div>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-xs-12">
                                <button onClick={this.editPlayer} className="btn btn-primary btn-block">Edit Player</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    });


module.exports = PlayersListItem;