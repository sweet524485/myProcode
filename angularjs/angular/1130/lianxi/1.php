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
			{{name}}
		商品名：{{goods.nn.name}}
		商品单价：{{goods.nn.price}}
		商品数量：{{goods.nn.num}}
		商品总价：<span ng-bind="goods.nn.num*goods.nn.price"></span>
			<button type="button" ng-click="goods.add()">增加</button>
			<button type="button" ng-click="goods.pre()">减少</button>
		</div>
	</div>
</body>
</html>
<script>
	angular.module('hd',[]).controller('ctrl',['$scope',function($scope){
//		$scope.name='hym';
		$scope.goods={
			nn:{name:'PC',price:22,num:2},
			add:function(){
				$scope.goods.nn.num=Math.min(++$scope.goods.nn.num,10);
			},
			pre:function(){
				$scope.goods.nn.num=Math.max(--$scope.goods.nn.num,1);
			}
		}
	}])
</script>