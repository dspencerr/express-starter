angular.module(NgAppName, [
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'ngAnimate',
	'angularFileUpload'
])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'html/setup.html',
					controller: 'PrimaryController'
				})
				.otherwise({redirectTo: '/'});
		}])
	.run(function($templateCache, $http) {

	});