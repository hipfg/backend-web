import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    host: '127.0.0.1',
    database: 'web',
    password: '',
    port: 3306,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
