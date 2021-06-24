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
	<div ng-controller="ctrl">
		<input type="checkbox" ng-model="status.PHP" ng-true-value="1" ng-false-value="0">PHP
		<input type="checkbox" ng-model="status.C" ng-true-value="1" ng-false-value="0">C++
		<input type="checkbox" ng-model="status.JAVA" ng-true-value="1" ng-false-value="0">JAVA
		{{status}}
		<div class="PHP" ng-if="status.PHP==1">
			<textarea>PHP</textarea>
		</div>
		<div class="C++" ng-if="status.C==1">
			<textarea>C++</textarea>
		</div>
		<div class="JAVA" ng-if="status.JAVA==1">
			<textarea>JAVA</textarea>
		</div>
	</div>
</div>
</body>
</html>
<script>
	angular.module('hd',[]).controller('ctrl',['$scope',function($scope){
		$scope.status={PHP:0,C:0,JAVA:0};
	}])
</script>