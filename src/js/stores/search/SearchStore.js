var Reflux = require("reflux");
var SearchActions = require("./../../actions/search/search");
var SearchStore = Reflux.createStore({
    listenables: [SearchActions],
    getInitialState: function () {
        return [];
    },
    onSearch: function (opts) {
        debugger;
        var predicates;
        var prop;
        var searchValue;
        var l;
        if (opts.value === "") {
            this.trigger(list);
        }
        if (opts.value != null && opts.list != null && opts.list instanceof Array) {
            if (opts.value.indexOf(":") > 0) {
                predicates = opts.value.split(":");
                prop = predicates[0];
                searchValue = predicates[1];
                l = opts.list.filter((x, i) => {
                    if (opts.list[i][prop] && opts.list[i][prop] === searchValue) {
                        return true;
                    }
                });
                this.trigger(l);
            } else {
                searchValue = opts.value;
                l = opts.list.filter(x => {
                    debugger;
                    if (this.isExactMatch(x.name, searchValue)) {
                        return true;
                    } else if (this.containsPredicate(x.name.toLowerCase(), searchValue.toLowerCase())) {
                        return true;
                    }
                });
                this.trigger(l);
            }
        }
    },
    isExactMatch: function(mustMatch, check) {
        return mustMatch === check;
    },
    containsPredicate: function(mustMatch, check) {
        return mustMatch.indexOf(check) > -1;
    }
});
module.exports = SearchStore;
