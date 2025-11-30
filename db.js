const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn('Warning: DATABASE_URL is not set. Please set it in your environment.');
}

const pool = new Pool({
  connectionString,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

async function query(text, params) {
  return pool.query(text, params);
}

module.exports = {
  query,
  pool,
};
