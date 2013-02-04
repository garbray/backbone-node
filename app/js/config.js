define([], function() {
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};

	var config = {};

	config.apiKey = 'cbhYbYadlsWVtMcMuON-hc4d';
	config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';

	config.clientId = '204913060300.apps.googleusercontent.com';
	return config;
});

