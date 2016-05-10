var knex = require('./knex');

var now = new Date();

var getAllDecks = function () { 
  return knex('decks');
};

var addDeck = function (name, description, img) {
  console.log('img:',img);
  return knex('decks').insert({
    name: name,
    description: description,
    img: img,
    created_at: now,
    updated_at: now
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
    addDeck: addDeck,
    getSingleHabit: getSingleHabit
}