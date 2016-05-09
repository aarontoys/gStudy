
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('decks').del(), 

    // Inserts seed entries
    knex('decks').insert({
      id: 1, 
      name: 'JavaScript',
      description: 'This is a JavaScript review deck',
      img: 'https://www.codementor.io/assets/page_img/learn-javascript.png'
    }),
    knex('decks').insert({
      id: 2, 
      name: 'jQuery',
      description: 'This is a jQuery review deck',
      img: 'http://www.exuberantsolutions.com/course_logo/jquery-icon.png'
    }),
    knex('decks').insert({
      id: 3, 
      name: 'Angular',
      description: 'This is a Angular review deck',
      img: 'http://pucksart.com/wp-content/uploads/2014/10/AngularJS-Shield-large-282x300.png'
    })
  );
};
