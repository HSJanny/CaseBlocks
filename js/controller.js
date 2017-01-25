angular.module('root.controllers', [])

.controller('rootCtrl', function ($scope, $rootScope) {
})

.controller('homeCtrl', function ($scope, $rootScope, $state, $stateParams, homeService) {
    //calling this method when user clicks at search button
    $scope.doSearch = function () {
        $scope.mClick = false;
        //calling getClientData from service.js
        homeService.getClientData($scope.clientReference).then(function (response) {
            //set $scope.mHome to return json data
            $scope.mHome = response.data;
        }, function (response) {
        });
    };

    //calling this method when user clicks at more detail button by passing index of quary that user want to see more details
    $scope.getMoreDetails = function (index) {
        //set mClick = true if user click at more details button 
        $scope.mClick = true;
        //set  $scope.mIndex equal to index parameter
        $scope.mIndex = index;
    };
});