const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');


db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT, safety TEXT, connections TEXT)");
});




db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Users:");
        rows.forEach(row => {
            console.log(`${row.username}: ${row.password}, ${row.safety},${row.connections}`);
        });
    }
});

db.close();