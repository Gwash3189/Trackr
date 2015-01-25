var React = require("react");
var Navigation = require("react-router").Navigation;

module.exports = React.createClass({
    mixins: [Navigation],
    getInitialState: function () {
        return {
            value: ""
        }
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
    render: function () {
        return (
            <form className="form-inline list-search">
                <div className="form-group">
                    <input type="text" className="form-control input-lg" id="search" placeholder="Search..." value={this.props.value || this.state.value } onChange={this.setValue}/>
                </div>
            </form>
        )
    }
})