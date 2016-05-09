

(function () {

angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider']

function config ($routeProvider) {
  console.log('hi');
  $routeProvider
    .when('/', {
      template: '<div app-deck-dashboard></div>'
    })
    // .when('/members', {
    //   template: '<div app-members></div>',
    //   controller: MyGeneralController
    // })
}


})();
