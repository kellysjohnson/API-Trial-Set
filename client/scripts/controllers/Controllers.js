
//'ngRoute', 'flagControllers'

var myApp = angular.module('myApp',[]);

//var flagControllers = angular.module('flagControllers', []);

//flagControllers.controller('FlagCtrl', ['$scope', '$routeParams', '$http',
//    function($scope, $routeParams, $http) {
//        $http.get('flags/' + $routeParams.flagId + '.json').success(function(data) {
//            $scope.flag = data;
//        });
//    }]);

myApp.controller('FlagCtrl',['$scope', function($scope){
    $scope.country = [
        {   name: 'Brazil',
            country: '/assets/Brazil-Flag-icon.png',
            code: 'brazil' },
        {   name: 'France',
            country: '/assets/France-Flag-icon.png',
            code: 'france'},
        {   name: 'United States',
            country: '/assets/American-Flag-icon.png',
            code: 'united&%20states' },
        {   name: 'Norway',
            country: '/assets/Norway-Flag-icon.png',
            code: 'norway'},
        {   name: 'Mexico',
            country: '/assets/Mexico-icon.png',
            code: 'mexico'},
        {   name: 'New Zealand',
            country: '/assets/New-Zealand-Flag-icon.png',
            code: 'new&%20zealand'},
        {   name: 'Canada',
            country: '/assets/Canada-Flag-icon.png',
            code: 'canada'}
        ];
    }]);

myApp.controller("UserLoginController", ['$scope', '$http', function ($scope, $http){
    $scope.name = {};                                                            // Player name entry
    $scope.players = [];                                                         // Player name added to database
                                                                                 // What about the points, how to get them there?
    var fetchPlayers = function() {
        return $http.get('/players').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch players from the API');
            }

            $scope.name = {};
            $scope.players = response.data;
            return response.data;
        })
    };

    $scope.add = function(player){
        return $http.post('/add', player).then(fetchPlayers);
    };

    $scope.remove = function(player){
        return $http.post('/remove', player).then(fetchPlayers);
    };

    fetchPlayers();

}]);


//myApp.controller('AnswerController',['$scope', function($scope){
//    $scope.answer = ;
//
//}]);