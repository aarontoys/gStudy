(function () {

  angular
    .module('myApp')
    .service('deckDashboardDataService', deckDashboardDataService);

  deckDashboardDataService.$inject = ['$http'];

  function deckDashboardDataService ($http) {

    var insertRes = [];

    return {
      getAllDecks: function () {
        return $http.get('/decks')
          .then(function(res) {
            console.log(res);
            return res;
          })
          .catch(function(err) {
            console.log('err: ',err)
            return err;
          })
      },
      addHabit: function (newHabit) {
          console.log('this should be the data from the modal: ', newHabit);
        return $http.post('/habits', {
          habit: newHabit.habit,
          description: newHabit.description,
          interval: newHabit.interval,
          period: newHabit.period,
          parent_habit_id: newHabit.parent_habit_id || 0,
          public: newHabit.public,
          cost: newHabit.cost
        })
          .then(function(res) {
            console.log('succes', res);
            insertRes.push(res.data.id[0]);
            console.log(insertRes);
            return res;
          })
          .catch(function(err) {
            console.log('err line28: ', err);
            return err;
          });
      },
      getNewHabitId: function () {
        console.log('line 49', insertRes);
        return insertRes[0];
      },
      getSingleHabit: function (id) {
        return $http.get('/habits/'+id)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          })
      }
    }
  }

})();