angular.module(NgAppName, [
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'ngAnimate',
	'angular.filter',
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