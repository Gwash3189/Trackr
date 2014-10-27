var $ = require("jquery");
module.exports = function  () {
	$(function () {
		require("./ViewModels/Controls/controlsViewModel.js")();
	})
}()