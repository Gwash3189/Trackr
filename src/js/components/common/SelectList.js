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
            var {list, ...other} = this.props;
            list = list.slice(0);
            list.unshift(this.props.defaultValue || {value: ""});

           return (
               <select {...other}>
                    {list.map(this.renderList)}
               </select>
           )
        }
    });

module.exports = SelectList;
