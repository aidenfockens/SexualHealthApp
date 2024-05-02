const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');


db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT, connections TEXT)");
});


db.serialize(() => {
    db.run("INSERT INTO users (username, password,connections) VALUES (?, ?,?)", ["AidenFockens", "defense","brandonbouley"]);
});

db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Users:");
        rows.forEach(row => {
            console.log(`${row.username}: ${row.password}, ${row.connections}`);
        });
    }
});

db.close();