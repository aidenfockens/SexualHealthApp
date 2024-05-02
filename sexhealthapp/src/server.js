const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('db/users.db');

app.post('/api/users', (req, res) => {

    const { username, password } = req.body;
  
    // Perform database operation (e.g., insert user)
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({ message: 'User added successfully' });
      }
    });
  });

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});