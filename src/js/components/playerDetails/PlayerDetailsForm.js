var React = require("react");
module.exports = React.createClass({
    componentWillReceiveProps: function(newProps) {
        this.setState({
            player: newProps
        })
    },
    render: function() {
        debugger;
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">{this.props.player.name}</h1>
            </div>
        )
    }
});