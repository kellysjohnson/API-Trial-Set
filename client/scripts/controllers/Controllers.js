
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
            file: '/assets/ObjectData/4JuneBrazil.json',
            code: 'brazil' },
        {   name: 'France',
            country: '/assets/France-Flag-icon.png',
            file: '/assets/ObjectData/4JuneFrance.json',
            code: 'france'},
        {   name: 'United States',
            country: '/assets/American-Flag-icon.png',
            file: '/assets/ObjectData/25MayDataUS.json',
            code: 'united&%20states' },
        {   name: 'Norway',
            country: '/assets/Norway-Flag-icon.png',
            file: '/assets/ObjectData/4JuneNorway.json',
            code: 'norway'},
        {   name: 'Mexico',
            country: '/assets/Mexico-icon.png',
            file: '/assets/ObjectData/4JuneMexico.json',
            code: 'mexico'},
        {   name: 'New Zealand',
            country: '/assets/New-Zealand-Flag-icon.png',
            file: '/assets/ObjectData/4JuneNewZealand.json',
            code: 'new&%20zealand'},
        {   name: 'Canada',
            country: '/assets/Canada-Flag-icon.png',
            file: '/assets/ObjectData/4JuneCanada.json',
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

    //$scope.add = function(player){
    //    $http.post('/add', function(req, res, next) {
    //        player.create(req.body, function(err, post){
    //            if (err) { next (err)
    //            } else res.redirect ('/register');
    //        });
    //    });
    //
    //};

    $scope.remove = function(player){
        return $http.post('/remove', player).then(fetchPlayers);
    };

    fetchPlayers();

}]);


//myApp.controller('AnswerController',['$scope', function($scope){
//    $scope.answer = ;
//
//}]);