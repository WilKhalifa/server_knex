
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dispo', function(t) {
    t.increments('id_dispo').primary()
    t.boolean('lundi')
    t.boolean('mardi')
    t.boolean('mercredi')
    t.boolean('jeudi')
    t.boolean('vendredi')
    t.boolean('samedi')
    t.boolean('dimanche')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dispo')
};
