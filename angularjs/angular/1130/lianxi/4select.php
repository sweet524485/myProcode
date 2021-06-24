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
		<select ng-options="v.name as v.value for v in data"  ng-model="city">
			<option value="">请选择</option>
		</select>
	</div>
</div>
</body>
</html>
<script>
	angular.module('hd',[]).controller('ctrl',['$scope',function($scope){
		$scope.city='jining';
		$scope.data=[
			{name:'beijing',value:'北京'},
			{name:'shanghai',value:'上海'},
			{name:'jining',value:'济宁'}
		];
	}])
</script>