angular.module(NgAppName)
	.controller('PrimaryController', ['$scope',
		function ($scope) {

		}
	]
)
.controller('ctrlAddAttachment', [
	'$scope', '$routeParams', '$window', 'FileUploader',
	function ($scope, $routeParams, $window, FileUploader) {

		var id = $routeParams.Id;
		$scope.Name = $routeParams.Name;

		$scope.uploader = new FileUploader({
			url: '/sf/attachment/upload/' + id
		});

		$scope.done = function(){
			$window.history.back();
		};

		//$scope.attachments = Attachment.find({
		//	limit: 1000,
		//	skip: 0,
		//	fields: ['Id', 'Name', 'Body', 'BodyLength', 'ContentType'],
		//	where: {
		//		IsDeleted: false,
		//		ParentId: $routeParams.Id
		//	}
		//});


	}]);