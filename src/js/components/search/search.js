var React = require("react");

module.exports = React.createClass({
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
        this.props.searchBy(value, this.props.list, this.props.defaultSearchValue);
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
                    <input ref="search" disabled={this.props.disabled === true ? "disabled" : ""} type="text" className="form-control input-lg" id="search" placeholder="Search..." value={this.props.value || this.state.value } onChange={this.setValue}/>
                </div>
            </form>
        )
    }
})