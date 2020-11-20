const utils = {
	tableResize(obj, key, height) {
		obj[key] = document.documentElement.clientHeight - height;
		window.onresize = function() {
			obj[key] = document.documentElement.clientHeight - height;
		};
	}
}

export default utils;
