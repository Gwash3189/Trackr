var SearchStore = require("./../stores/search/SearchStore");
var SearchActions = require("./../actions/search/search");
module.exports = {
    setInitialState: function () {
        return {
            searchList: [],
            showSearch: false
        }
    },
    componentDidMount: function () {
        SearchStore.listen(this.updateSearchList);
    },
    updateSearchList: function (searchList) {
        if (this.isMounted()) {
            this.setState({
                searchList: searchList || [],
                showSearch: true
            });
        }
    },
    search: function (value, searchList, defaultSearchValue) {
        if (value === "") {
            if (this.isMounted()) {
                this.setState({
                    showSearch: false
                });
            }
        } else {
            SearchActions.search({
                value: value,
                list: searchList,
                getSearchTerms: defaultSearchValue
            });
        }
    }
};