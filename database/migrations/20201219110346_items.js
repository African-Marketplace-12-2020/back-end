exports.up = function (knex) {
    return (
      knex.schema
        .createTable('items', items => {
          items.increments('id');
          items.string('name', 255).notNullable();
          items.string('description', 255);
          items.integer('price').notNullable();
        })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('items');
  };
