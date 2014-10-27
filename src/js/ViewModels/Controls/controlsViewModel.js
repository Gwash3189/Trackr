var ko = require('knockout');
var contolsManagerMixin = require("./../../Mixins/Controls/controlsManager.js");
var document = require("./../../Dom/document.js");
module.exports = function() {
	var obj = contolsManagerMixin();
	ko.applyBindings(obj, document.getElementById("controls"))
	return obj;
}