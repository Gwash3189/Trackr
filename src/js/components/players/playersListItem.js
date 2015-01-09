var React = require("react/addons");

var PlayersListItem =
    React.createClass({
        getInitialState: function () {
            return {
                showOrHide: false
            };
        },
        renderPlayerDetails: function(showOrHide) {
                return  showOrHide && (
                    <ul>
                        <li>
                            <span>Health:</span><span>14</span>
                        </li>
                    </ul>
                )
        },
        toggleShowOrHideDetails: function() {
                this.setState({
                    showOrHide: !this.state.showOrHide
                })
        },
        render: function () {
            return (
                <div className="col-xs-6 col-sm-3 player-photo" onClick={this.toggleShowOrHideDetails}>
                    <img className="img-responsive" alt={this.props.character.name} src="http://i64.photobucket.com/albums/h200/cygnus46/Blog%20Pics/DSC02018.jpg" />
                    <h4>{this.props.character.name}</h4>
                    <span className="text-muted">{this.props.character.class} - {this.props.character.race}</span>
                    {this.renderPlayerDetails(this.state.showOrHide)}
                </div>
            )
        }
    });


module.exports = PlayersListItem;
