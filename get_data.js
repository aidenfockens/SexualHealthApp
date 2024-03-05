


// this will interact with our database of accounts.db and once we add stuff to it will be able to get data from it

const sqlite3 = require('sqlite3').verbose();

// Open a database connection
const db = new sqlite3.Database('accounts.db');

// Perform a simple query
db.all('SELECT * FROM users', (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // Process the rows
  rows.forEach((row) => {
    console.log(row);
  });

  // Close the database connection
  db.close();
});