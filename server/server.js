const express = require('express');
const cors = require('cors');
const { Client } = require('pg');
const app = express();
const port = 60000;

var allowedOrigins = ['http://localhost:3000', 'http://192.168.1.84:3000'];

app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});

app.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

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

app.get('/api/content', (req, res) => {
  client.query('SELECT * FROM content_blocks', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.toString() });
      console.error(error);
    }
    console.log(results.rows);  // Add this line
    res.status(200).json(results.rows);
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

  