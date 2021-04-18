import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('animal', (table) => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.string('class').notNullable();
    table.string('group').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('animal');
}
