angular.module(NgAppName)
	.controller('PrimaryController', ['$scope', '$location', '$http',
		function ($scope, $location, $http) {


			$scope.current = {}
			$scope.current.page = $location.$$path.slice(1, 50);


			$scope.processDocs = function () {
				$.notify({
					message: "Please wait for a confirmation processing is done prior to running commissions.",
					icon: 'glyphicon glyphicon-info-sign'
				}, {type: 'info'});
				$http.get('/commissions/process')
					.then(function (res) {
						$.notify({
							message: "Docs where processed successfully",
							icon: 'glyphicon glyphicon-ok'
						}, {type: 'success'});
					}, function (err) {
						$.notify({
							message: "There was an error when processing the docs.",
							icon: 'glyphicon glyphicon-warning-sign'
						}, {type: 'warning'});
						console.log(err);
					})

			}

		}
	]
);