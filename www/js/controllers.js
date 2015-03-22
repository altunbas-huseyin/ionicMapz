angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
    
     var site = new google.maps.LatLng(55.9879314,-4.3042387);
     var hospital = new google.maps.LatLng(55.8934378,-4.2201905);
      var marker = new google.maps.Marker({
          position: site,
          map: map,
          title: 'Strathblane (Job Location)'
        });
        
        var hospitalRoute = new google.maps.Marker({
          position: hospital,
          map: map,
          title: 'Hospital (Stobhill)'
        });
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
