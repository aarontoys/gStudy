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

// router.get('/:id', function (req, res, next) {
//   console.log('line20: ', req.params.id);
//   decks.getSingleHabit(req.params.id)
//     .then(function (result) {
//       res.status(200).json({
//         status: 'success',
//         data: result
//       });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// });

router.post('/new-deck', function (req, res, next) {
  console.log('decks line34: ', req.body);
  var b = req.body;

  decks.addDeck(b.name, b.description, b.img)
    .then(function (id) {
      console.log('new deck id: ', id);
      res.status(200).json({
        status: 'success',
        id: id
      })
    })
})

module.exports = router;