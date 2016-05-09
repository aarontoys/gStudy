// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gStudy'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gStudy'
  },

};
