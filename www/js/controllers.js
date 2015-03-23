angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapCtrl', function($scope, $ionicLoading) {
	console.log('map ctrl loading');
  $scope.mapCreated = function(map) {
	  console.log('map created');
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
