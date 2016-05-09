
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function (table) {
    table.increments();
    table.string('question').notNullable();
    table.string('answer').notNullable();
    table.string('question_img_url');
    table.string('answer_img_url');
    table.integer('deck_id').references('decks.id').onDelete('cascade');
    table.timestamps();
  })
};  

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
