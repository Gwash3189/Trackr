var React = require("react");

var listContainer =
    React.createClass({
        propTypes: {
            list: React.PropTypes.array.isRequired,
            renderListItem: React.PropTypes.func.isRequired
        },
        render: function () {
            var nodes = this.props.list.map(function (item) {
                return (
                    <li key={item.id}>
                        {this.props.renderListItem(item)}
                    </li>)
            }, this);
            return (
                <div>
                    <div className="well well-sm">
                        <ul ref="list">
                            {nodes}
                        </ul>
                    </div>
                </div>
            )
        }
    });

module.exports = listContainer;