var ko = require("knockout");
var instance = undefined;
module.exports = function() {
	var obj = instance === undefined ? {} : instance;
	if (obj === instance) {
		return instance;
	} else {
		obj.createEncounter = function() {
			alert("LAWL");
		}
		return obj;
	}
}