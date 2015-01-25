var React = require("react");

module.exports = React.createClass({
    render: function() {
        return (
            <form className="form-inline list-search">
                <div className="form-group">
                    <input type="text" className="form-control input-lg" id="search" placeholder="Search..." />
                </div>
            </form>
        )
    }
})