<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<script src="../../org/angular.min.js"></script>
</head>
<body>
	<div ng-app="hd">
		<div ng-contrller="ctrl">
			<input type="radio" ng-model="status" value="1">打开
			<input type="radio" ng-model="status" value="0">关闭
			{{status}}
			<div ng-show="status==0">
				<textarea></textarea>
			</div>
		</div>
	</div>
</body>
</html>
<script>
	angular.module('hd',[]).controller('ctrl',['$scope',function($scope){
		$scope.status = 1;
	}])
</script>