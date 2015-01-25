var React = require("react/addons");

var PlayersListItem = React.createClass({
    render: function () {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 player-photo">
                <img className="img-responsive" alt={this.props.character.name} src={this.props.character.imageSource} />
                <h4>{this.props.character.name}</h4>
                <span className="text-muted">{this.props.character.race} - {this.props.character.class}</span>
            </div>
        )
    }
});


module.exports = PlayersListItem;
