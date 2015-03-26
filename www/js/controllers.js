angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	}
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
	$scope.settings = {
		enableFriends : true
	};
})

.controller('MapCtrl', function ($scope, $ionicLoading, $http) {
	console.log('map ctrl loading');
	$scope.mapCreated = function (map) {
		console.log('map created');
		$scope.map = map;

		$http.get('http://localhost:3000/companies')
			.success(function(data, status, headers, config) {
				console.log('got data', data);
				for (var i=0; i<data.length; i++) {
					var site = new google.maps.LatLng(data[i].lat, data[i].lng);
					var marker = new google.maps.Marker({position: site, map: map,  title: data[i].name});
				};
				$scope.map.setCenter(new google.maps.LatLng(data[0].lat, data[0].lng));
			})
			.error(function(data, status, headers, config) {
				console.log('got error', arguments);
			});
		
		//$scope.centerOnMe();
	};

	$scope.centerOnMe = function () {
		console.log("Centering");
		if (!$scope.map) {
			return;
		}

		$scope.loading = $ionicLoading.show({
				content : 'Getting current location...',
				showBackdrop : false
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
