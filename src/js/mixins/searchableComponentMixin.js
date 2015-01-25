var SearchStore = require("./../stores/search/SearchStore");
var SearchActions = require("./../actions/search/search");
module.exports = {
    setInitialState: function() {
        return {
            searchList: [],
            showSearch: false
        }
    },
    componentDidMount: function() {
        SearchStore.listen(this.updateSearchList);
    },
    updateSearchList: function (searchList) {
        debugger;
        this.setState({
            searchList: searchList || [],
            showSearch: true
        });
    },
    search: function (value, searchList) {
        if(value === ""){
            this.setState({
                showSearch: false
            });
        } else {
            SearchActions.search({
                value: value,
                list: searchList
            });
        }
    }
};