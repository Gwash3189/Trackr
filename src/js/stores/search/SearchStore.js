var Reflux = require("reflux");
var SearchActions = require("./../../actions/search/search");
var SearchStore = Reflux.createStore({
    listenables: [SearchActions],
    onSearch: function (predicate, list) {
        var predicates;
        var prop;
        var searchValue;
        var l;
        if(predicate === "") {
            this.trigger(list);
        }
        if (predicate && list && list instanceof Array) {
            if (predicate.indexOf(":") > 0) {
                predicates = predicate.split(":");
                prop = predicates[0];
                searchValue = predicates[1];
                l = list.filter((x, i) => {
                    if (list[i][prop] && list[i][prop] === searchValue) {
                        return true;
                    }
                });
                this.trigger(l);
            } else {
                searchValue = predicate;
                l = list.filter(x => {
                    return x.name.toLowerCase().indexOf(searchValue) > 0;
                });
                this.trigger(l);
            }
        }
    }
});
module.exports = SearchStore;
