

(function () {

angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider']

function config ($routeProvider, $locationProvider) {
  console.log('hi');
  $routeProvider
    .when('/', {
      template: '<div app-deck-dashboard></div>'
    })
    .when('/new-deck', {
      template: '<div app-new-deck></div>'
      // controller: MyGeneralController
    });

  // $locationProvider.html5Mode(true);
}


})();
