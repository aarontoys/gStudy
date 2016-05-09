

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
    // .when('/members', {
    //   template: '<div app-members></div>',
    //   controller: MyGeneralController
    // })

  $locationProvider.html5Mode(true);
}


})();
