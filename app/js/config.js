define([], function() {

	var config = {};

	config.apiKey = 'M8nNxh2XAZWmgnomQDJlbDEh';
	config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';

	config.clientId = '678691141548.apps.googleusercontent.com';
	
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};
	
	return config;
});

