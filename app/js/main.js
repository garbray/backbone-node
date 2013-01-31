require.config({
	baseUrl: 'js',
	path: {

	},
	shim: {

	}
});

require(['app'], function(App){
	window.bTask = new App();
});