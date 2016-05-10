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

    function newDeckCtrl () {
      var vm = this;
      vm.questionArr = [{}];

      vm.addNewQuestion = function () {

        vm.questionArr.push({
          question: vm.question,
          question_img_url: vm.question_img_url,
          answer: vm.answer,
          answer_img_url: vm.answer_img_url
        });
        console.log(vm.questionArr);
      }
    }

})();