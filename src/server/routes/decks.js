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
  decks.getSingleHabit(req.params.id)
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

router.post('/', function (req, res, next) {
  console.log('habit line34: ', req.body);
  var b = req.body;

  decks.addHabit(b.habit, b.description, b.interval, b.period, b.parent_habit_id, b.category_id, b.public, b.cost)
    .then(function (id) {
      console.log('new habit id: ', id);
      res.status(200).json({
        status: 'success',
        id: id
      })
    })
})

module.exports = router;