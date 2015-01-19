var React = require("react/addons");
var $ = require("jquery");

var SelectList =
    React.createClass({
        renderList: function(item, i) {
            return (
                <option key={i} value={item.value}>{item.displayValue || item.value}</option>
            )
        },
        render: function () {
            var list = this.props.list.slice(0);
            list.unshift(this.props.defaultValue || {value: ""});
           return (
               <select  className={this.props.className} id={this.props.id} onChange={this.props.onChange}>
                    {list.map(this.renderList)}
               </select>
           )
        }
    });

module.exports = SelectList;

