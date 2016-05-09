
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
