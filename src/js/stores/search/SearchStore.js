var Reflux = require("reflux");
var SearchActions = require("./../../actions/search/search");
var SearchStore = Reflux.createStore({
    listenables: [SearchActions],
    onSearch: (predicate, list) => {
        var predicates = predicate.split(":");
        var prop = predicates[0];
        var searchValue = predicates[1];

        return list.filter( (x,i) => {
            if(list[i][prop] && list[i][prop] === searchValue){
                return true;
            }
        });

    }
});
module.exports = SearchStore;
