
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
            code: 'canada'},
        {   name: 'Djibouti',
            country: '/assets/Djibouti-Flag-icon.png',
            code: 'djibouti'},

        {   name: 'Germany',
            country: '/assets/Germany-Flag-icon.png',
            code: 'germany'}
        ];
    }]);