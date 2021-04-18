import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    user: 'root',
    host: '127.0.0.1',
    database: 'web',
    password: '',
    port: 3306,
  },
  useNullAsDefault: true,
});

export default db;
