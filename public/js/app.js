angular.module(NgAppName, [
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'ngAnimate',
	'angularFileUpload'
])
	.config(function ($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	})
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'html/data.html',
					controller: 'PrimaryController'
				})
				.when('/data', {
					templateUrl: 'html/data.html',
					controller: 'PrimaryController'
				})
				.when('/payments', {
					templateUrl: 'html/payments.html',
					controller: 'PrimaryController'
				})
				.when('/history', {
					templateUrl: 'html/history.html',
					controller: 'PrimaryController'
				})
				.otherwise({redirectTo: '/'});
		}])
	.run(function($templateCache, $http) {

	});