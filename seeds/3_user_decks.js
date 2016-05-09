
exports.seed = function(knex, Promise) {

  var now = new Date();
  
  return Promise.join(
    // Deletes ALL existing entries
    knex('user_decks').del(), 

    // Inserts seed entries
    knex('user_decks').insert({
      id: 1, 
      user_id: 1,
      deck_id: 1,
      created_at: now,
      updated_at: now
    }),
    knex('user_decks').insert({
      id: 2, 
      user_id: 1,
      deck_id: 2,
      created_at: now,
      updated_at: now
    }),
    knex('user_decks').insert({
      id: 3, 
      user_id: 1,
      deck_id: 3,
      created_at: now,
      updated_at: now
    }),
    knex('user_decks').insert({
      id: 4, 
      user_id: 2,
      deck_id: 2,
      created_at: now,
      updated_at: now
    }),
    knex('user_decks').insert({
      id: 5, 
      user_id: 2,
      deck_id: 3,
      created_at: now,
      updated_at: now
    }),
    knex('user_decks').insert({
      id: 6, 
      user_id: 3,
      deck_id: 1,
      created_at: now,
      updated_at: now
    }),
    knex('user_decks').insert({
      id: 7, 
      user_id: 3,
      deck_id: 3,
      created_at: now,
      updated_at: now
    })
  );
};
