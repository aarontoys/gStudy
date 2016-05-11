var express = require('express');
var router = express.Router();

var decks = require('../../../db/deckQueries')

router.get('/', function (req, res, next) {
  decks.getAllDecks()
    .then(function (results){
      res.status(200).json({
        status: 'success',
        data: results
      });
    })
    .catch(function (err) {
      return next(err);
    })
});

router.get('/:id', function (req, res, next) {
  console.log('line20: ', req.params.id);
  decks.getSingleDeck(req.params.id)
    .then(function (result) {
      res.status(200).json({
        status: 'success',
        data: result
      });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/new-deck', function (req, res, next) {
  console.log('decks line34: ', req.body);
  var b = req.body;

  decks.addDeck(b.name, b.description, b.img, b.cardArr)
    .then(function (id) {
      console.log('new deck id: ', id);
      res.status(200).json({
        status: 'success',
        id: id
      })
      return id;
    })
    .then(function(id) {
      console.log('is this my id? ',id);
      console.log(req.body.cardArr);
      console.log('b', b.cardArr);
      b.cardArr.forEach(function(el) {  
        decks.addCard(id[0], el.question, el.answer, el.question_img_url, el.answer_img_url)
          .then(function(cardId) {
            console.log('new card id: ', cardId);
            // res.json({
            //   // status: '200',
            //   cardId: cardId
            return cardId;
            })
          })
      })
      .then(function(cardId) {
        console.log('card id',cardId);
        // res.status . . . 
      })

})


module.exports = router;