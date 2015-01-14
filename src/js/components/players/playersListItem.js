var React = require("react/addons");

var PlayersListItem = React.createClass({
        render: function () {
            return (
                <div className="col-xs-12 player-photo">
                    <div className="row">

                        <div className="col-xs-8">
                            <h4 className="truncate">{this.props.character.name}</h4>
                        </div>
                        <div className="col-xs-2 class-race-text">
                            <span className="text-muted">{this.props.character.class}</span>
                        </div>
                        <div className="col-xs-2 class-race-text">
                            <span className="text-muted">{this.props.character.race}</span>
                        </div>
                    </div>
                </div>
            )
        }
    });


module.exports = PlayersListItem;
