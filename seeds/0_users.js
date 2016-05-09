
exports.seed = function(knex, Promise) {

  var now = new Date();

  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({
      id: 1, 
      fname: 'Aaron',
      lname: 'Toys',
      email: 'aarontoys@gmail.com',
      pword: 'pass',
      created_at: now,
      updated_at: now
    }),
    knex('users').insert({
      id: 2, 
      fname: 'Nicki',
      lname: 'Toys',
      email: 'nickistruck@yahoo.com',
      pword: 'pass',
      created_at: now,
      updated_at: now
    }),
    knex('users').insert({
      id: 3, 
      fname: 'Michael',
      lname: 'Sunshine',
      email: 'mikeysunshine@gmail.com',
      pword: 'pass',
      created_at: now,
      updated_at: now
    })
  );
};
