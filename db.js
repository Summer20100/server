require('dotenv').config();
const { Pool } = require('pg');

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASS,
//     port: process.env.DB_PORT,
// });

const pool = new Pool({
    user: 'bczbngvg',
    host: 'flora.db.elephantsql.com',
    database: 'bczbngvg',
    password: 'BGq6InRZA7itkELFSX48IHS5ZuIZ5JLx',
    port: 5432,
});

module.exports = pool;
