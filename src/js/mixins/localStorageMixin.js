var persist = function(item) {
	window.localStorage.setItem(this.__localStorageKey, JSON.stringify(item));
};
var localStorageMixin =  {
	setupLocalStorage: function(key) {
		this.__localStorageKey = key;
		this.listen(persist.bind(this));
		return JSON.parse(window.localStorage.getItem(this.__localStorageKey));
	}
};

module.exports = localStorageMixin;