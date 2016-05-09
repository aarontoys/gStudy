(function () {

  angular
    .module('myApp')
    .directive('appDeckDashboard', deckDashboard)

    function deckDashboard () {
      return {
        restrict: 'EA',
        templateUrl: 'app/deck-dashboard/deckDashboard.view.html',
        controller: deckDashboardCtrl,
        controllerAs: 'vm'
      }
    }

    deckDashboardCtrl.$inject = ['deckDashboardDataService'];

    function deckDashboardCtrl (deckDashboardDataService) {
      var vm = this;

      getDecks();

      function getDecks () {
        deckDashboardDataService.getAllDecks()
          .then(function(decks) {
            console.log('decks: ',decks);
            vm.decks = decks.data.data
            console.log(vm.decks);
          })
      }
    }

})();