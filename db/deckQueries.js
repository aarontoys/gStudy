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

var addCard = function (id, question, answer, qImg, aImg) {
  return knex('cards').insert({
    question: question,
    answer: answer,
    question_img_url: qImg,
    answer_img_url: aImg,
    deck_id: id,
    created_at: now,
    updated_at: now
  },'id')
}

function getSingleDeck (id) {
  return knex('cards')
    .where('deck_id',id)
}

module.exports = {
    // getUserHabits: function() {
    //   return userHabits();  
    // }
    getAllDecks: getAllDecks,
    addDeck: addDeck,
    addCard: addCard,
    getSingleDeck: getSingleDeck
}