var app = angular.module('employeeDetails',[]);
app.controller('emp_cont',function($scope){
	$scope.firstname="bLah";
	$scope.lastname="bluE";
	$scope.fullname=function(){
		return $scope.firstname+" "+$scope.lastname
	}

});

app.controller('array1',function($scope){
	$scope.names=[
	"shayi",
	"sceva",
	"akkus",
	"aks"
	];

});
