(function(angular, undefined) {
  angular.module("myblogApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"admin"
	],
	"apiURL": "http://localhost:9000/api/"
})

;
})(angular);