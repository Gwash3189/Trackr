var React = require("react/addons");

var SelectList =
    React.createClass({
        renderList: function(item, i) {
            return (
                <option key={i} value={item.value}>{item.displayValue || item.value}</option>
            )
        },
        render: function () {
           return (
               <select  className={this.props.className} id={this.props.id} onChange={this.props.callBack}>
                    {this.props.list.map(this.renderList)}
               </select>
           )
        }
    });

module.exports = SelectList;

