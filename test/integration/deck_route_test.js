process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var knex = require('../../db/knex');
var should = chai.should();
// var testUtilities = require('../utilities');
// var testSeed = require('../../src/server/models/seeds/test-seed');
// var Students = require('../../src/server/models/students')

chai.use(chaiHttp);


describe('habitList routes', function() {



// describe('API routes', function() {

  beforeEach(function(done) {
      knex.migrate.rollback().then(function() {
        knex.migrate.latest()
          .then(function() {
            return knex.seed.run().then(function() {
              done()
            })
          })
          // done()
      })
  });

  // afterEach(function(done) {
  //     knex.migrate.rollback().then(function() {
  //       knex.migrate.latest()
  //         .then(function() {
  //           return knex.seed.run().then(function() {
  //             done()
  //           })
  //         })
  //     })
  // });

  describe('/GET decks', function() {

    it('should return all decks', function(done) {
      chai.request(server)
      .get('/decks')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('data')
        res.body.status.should.equal('success')
        res.body.data.length.should.equal(3);
        res.body.data[0].name.should.equal('JavaScript');
        res.body.data[0].description.should.equal('This is a JavaScript review deck');
        res.body.data[0].img.should.equal('https://www.codementor.io/assets/page_img/learn-javascript.png');
      done()
      })
    })
  })

  // describe('/GET single habit', function() {

  //   it('should return a single habit', function(done) {
  //     // Students.findOne(function (err, student) {
  //       chai.request(server)  
  //       .get('/habits/1')
  //       .end(function(err, res) {
  //         res.status.should.equal(200);
  //         res.type.should.equal('application/json');
  //         res.body.should.be.a('object');
  //         res.body.should.have.property('data')
  //         res.body.status.should.equal('success')
  //         res.body.data.length.should.equal(1);
  //         res.body.data[0].habit.should.equal('Shema');
  //         res.body.data[0].description.should.equal('Say the Shema and before and after brochos twice daily at the propper time');
  //         res.body.data[0].interval.should.equal(2);
  //         res.body.data[0].period.should.equal('daily');
  //         res.body.data[0].parent_habit_id.should.equal(0);
  //         res.body.data[0].category_id.should.equal(1);
  //         res.body.data[0].public.should.equal(true);
  //         res.body.data[0].cost.should.equal('1.00');
  //       done()
  //       });
  //     // })
  //   });
  // });

  describe('/POST decks', function() {

    it('should add a new deck', function(done) {
      chai.request(server)
      .post('/decks/new-deck')
      .send({
        name: 'Test name',
        description: 'Deck description',
        img: 'https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300-rw',
        cardArr: [
          {
            question: 'q1',
            answer: 'a1',
            question_img_url: 'test img1',
            answer_img_url: 'test ans img1'
          },
          {
            question: 'q2',
            answer: 'a2',
            question_img_url: 'test img2',
            answer_img_url: 'test ans img2'
          }
        ]
      })
      .end(function(err, res) {
        chai.request(server)
        .get('/decks')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('data')
          res.body.status.should.equal('success')
          res.body.data.length.should.equal(4);
          res.body.data[3].name.should.equal('Test name');
          res.body.data[3].description.should.equal('Deck description');
          res.body.data[3].img.should.equal('https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300-rw');
          
          chai.request(server)
          .get('/decks/4')
          .end(function(err, res) {
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.status.should.equal('success');
            res.body.data.length.should.equal(2);
          done()
          })
        })
      })
    })
  })

});