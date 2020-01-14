exports.up = function(knex) {
   return knex.schema.createTable('hackathons', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 500);
      tbl.string('url');
      tbl.string('location');
      tbl.string('start_date').notNullable();
      tbl.string('end_date').notNullable();
      tbl.boolean('is_open');
      tbl.integer('organizer_id')
         .references('id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
   });
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('hackathons');
};