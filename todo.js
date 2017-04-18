var app = angular.module("myapp", ['ui.bootstrap']);
app.controller('TodoCtrl', ['$scope', '$filter', function ($scope, $filter) 
{
  	$scope.currentPage = 1;
    $scope.itemsPerPage = 10;
    $scope.maxSize = 5;
    
	$scope.list = [{name: 'Build App', completed: false}, {name: 'submit app', completed: false}];
    $scope.show = "All";

	//thrid argument if we watch the list all the times
	$scope.$watch('list', function()
	{
		$scope.remain = $filter('filter')($scope.list, {completed:false}).length;
	}, true)

	$scope.removeTodo = function(index)
	{
		//delete on element from index
		$scope.list.splice(index, 1);
	}
    
    $scope.showFn = function  (todo) {
		if ($scope.show === "All") {
			return true;
		}else if(todo.completed && $scope.show === "Complete"){
			return true;
		}else if(!todo.completed && $scope.show === "Incomplete"){
			return true;
		}else{
			return false;
		}
	};


  	$scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

	$scope.addTodo = function()
	{
		if ($scope.newTodo != '')
		{
			$scope.list.push(
			{
			// model newTodo
				name : $scope.newTodo,
				completed : false
			})
		}
		else
			alert("Message can not be empty !")

		//to empty task
		$scope.newTodo = '';
	}
}]);