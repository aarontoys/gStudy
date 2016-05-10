(function () {

  angular
    .module('myApp')
    .directive('appNewDeck', newDeck)

    function newDeck () {
      return {
        restrict: 'EA',
        templateUrl: 'app/new-deck/newDeck.view.html',
        controller: newDeckCtrl,
        controllerAs: 'vm'
      }
    }

    // newDeckCtrl.$inject = ['newDeckDataService'];

    // function newDeckCtrl (newDeckDataService) {
    function newDeckCtrl () {
      var vm = this;

      vm.questionArr = [''];

      vm.addNewQuestion = function () {
        console.log('clicked!');
        vm.questionArr.push('');
      }
    }

})();