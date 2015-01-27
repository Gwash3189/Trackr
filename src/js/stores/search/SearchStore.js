var Reflux = require("reflux");
var SearchActions = require("./../../actions/search/search");
var SearchStore = Reflux.createStore({
    listenables: [SearchActions],
    getInitialState: function () {
        return [];
    },
    onSearch: function (opts) {
        var predicates;
        var prop;
        var searchValue;
        var l;
        var searchTerms;
        if (opts.value === "") {
            this.trigger(list);
        }
        if (opts.value != null && opts.list != null && opts.list instanceof Array) {
            if (opts.value.indexOf(":") > 0) {
                var tmp = [];
                var results = [];
                this.getSearchTerms(opts.value).forEach(x => {
                    l = results.concat(this.searchForValueOnProps(opts.list, x));
                });
                this.trigger(l);
            } else {
                searchValue = opts.value;
                l = opts.list.filter(x => {
                    if (this.isExactMatch(opts.getSearchTerms(x), searchValue)) {
                        return true;
                    } else if (this.containsPredicate(opts.getSearchTerms(x), searchValue.toLowerCase())) {
                        return true;
                    }
                });
                this.trigger(l);
            }
        }
    },
    searchForValueOnProps: function(list, valueDTO) {
        return list.filter((player) => {
            if (player[valueDTO.prop] && player[valueDTO.prop] === valueDTO.searchValue) {
                return true;
            }
        })
    },
    getSearchTerms: function (value) {
        var replaceColonAndSpaceRegEx = /[:]\s*/g;
        var replaceWith = ":";
        var splitByFirst = " ";
        var splitBySecond = ":";

        return value.replace(replaceColonAndSpaceRegEx, replaceWith).split(splitByFirst).map(x => {
            var t = x.split(splitBySecond);
            return {
                prop: t[0],
                searchValue: t[1]
            }
        });
    },
    isExactMatch: function (mustMatch, check) {
        return mustMatch === check;
    },
    containsPredicate: function (mustMatch, check) {
        return mustMatch.indexOf(check) > -1;
    }
});
module.exports = SearchStore;
