//create_messages_table

exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function(t) {
        t.increments('id_message').primary()
        t.integer('id').references(id).inTable(user)
        t.integer('id_chatroom').references(id).inTable(chatroom)
        t.dateTime('date')
        t.string('content')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages')
};


//create_chatroom_table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('chatroom', function(t) {
        t.increments('id_chatroom').primary()
        t.date('date_chatroom')
        t.integer('last_message').references(id_message).inTable(messages)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chatroom')
};

