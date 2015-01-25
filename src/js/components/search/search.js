var React = require("react");
var Navigation = require("react-router").Navigation;
var $ = require("jquery");

module.exports = React.createClass({
    mixins: [Navigation],
    getInitialState: function () {
        return {
            value: ""
        }
    },
    componentDidMount: function() {
        setFocus();
    },
    setValue: function (e) {
        this.setState({
            value: e.target.value || ""
        });
        this.callSearchCallBack(e.target.value);
    },
    callSearchCallBack: function (value) {
        this.props.searchBy(value);
        if (value !== "" && this.props.goToWhenSearching) {
            this.props.goToWhenSearching(value);
        }
        if (value === "" && this.props.goToWhenNotSearching) {
            this.props.goToWhenNotSearching();
        }
    },
    setFocus: function() {
        debugger;
        if(this.props.setFocus){
            $(this.refs.search.getDOMNode()).focus();
        }
    },
    render: function () {
        return (
            <form className="form-inline list-search">
                <div className="form-group">
                    <input ref="search" disabled={this.props.disabled === true ? "disabled" : ""} type="text" className="form-control input-lg" id="search" placeholder="Search..." value={this.props.value || this.state.value } onChange={this.setValue}/>
                </div>
            </form>
        )
    }
})