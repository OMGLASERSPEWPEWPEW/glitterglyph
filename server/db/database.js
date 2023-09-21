const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'wolf1',
    database: 'postgres'
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

client.query('SELECT * FROM content_blocks', (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results.rows);
    client.end();
});
