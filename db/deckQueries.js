var knex = require('./knex');

var getAllDecks = function () { 
  return knex('decks');
};

var addHabit = function (habit, description, interval, period, parent_habit_id, category_id, public, cost) {
  return knex('habits').insert({
    habit: habit,
    description: description,
    interval: interval,
    period: period,
    parent_habit_id: parent_habit_id,
    category_id: category_id,
    public: public,
    cost: cost
  },'id')
}

function getSingleHabit (id) {
  return knex('habits')
    .where('id',id)
}

module.exports = {
    // getUserHabits: function() {
    //   return userHabits();  
    // }
    getAllDecks: getAllDecks,
    addHabit: addHabit,
    getSingleHabit: getSingleHabit
}