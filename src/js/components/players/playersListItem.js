var React = require("react/addons");

var PlayersListItem =
    React.createClass({
        render: function () {
            return (
                <div className="col-xs-6 col-sm-3 player-photo">
                    <img className="img-responsive" alt={this.props.character.name} src="http://i64.photobucket.com/albums/h200/cygnus46/Blog%20Pics/DSC02018.jpg" />
                    <h4>{this.props.character.name}</h4>
                    <span className="text-muted">{this.props.character.class} - {this.props.character.race}</span>
                </div>
            )
        }
    });


module.exports = PlayersListItem;
