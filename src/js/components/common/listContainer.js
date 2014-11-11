var React = require("react/addons");

var listContainer =
    React.createClass({
        propTypes: {
            list: React.PropTypes.array.isRequired,
            renderListItem: React.PropTypes.func.isRequired
        },
        render: function () {
            var classes = React.addons.classSet(this.props.classes);
            var nodes = this.props.list.map(function (item) {
                if(!item.id){
                    throw new Error("provide an ID on each child item");
                }
                return (
                    <span key={item.id}>
                        {this.props.renderListItem(item)}
                    </span>)
            }, this);
            return (
                <div>
                    <div className={classes}>
                        {nodes}
                    </div>
                </div>
            )
        }
    });

module.exports = listContainer;