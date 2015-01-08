var mixin = require("./mixin");
var guidMaker = require("./../components/common/guidMaker");
module.exports = mixin( x => {
    x.name = x.name || "";
    x.path = x.path || "/"+x.name;
    x.displayName = x.displayName || "";
    x.default = x.default || false;
    x.handler = x.handler || (<div>You did not provide a handler for this route</div>);
    x.id = x.id || guidMaker();
    return x;
});