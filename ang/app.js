

var app = angular.module('myApp', [])

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http){

	// get request to get book data
	$http.get('https://www.googleapis.com/books/v1/volumes?q=quilting').then(function(response){
		console.log(response)
		// my book array
		$scope.books = response.data.items

		console.log($scope.books)
	})

}])


// buyLink
// :
// "https://play.google.com/store/books/details?id=JlWhoFm8-TgC&rdid=book-JlWhoFm8-TgC&rdot=1&source=gbs_api"
// country
// :
// "US"