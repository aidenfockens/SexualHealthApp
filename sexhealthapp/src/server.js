const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('db/users.db');



app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});



app.post('/api/users', (req, res) => {

    const { username, password } = req.body;
    const safety = "y"
    // Perform database operation (e.g., insert user)
    db.run('INSERT INTO users (username, password,safety) VALUES (?,?,?)', [username, password,safety], (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json({ message: 'User added successfully' });
      }
    });
  });






app.post('/api/writeBodies/:username', (req, res) => {
    const { username} = req.params;
    const newConnectionData = JSON.stringify(req.body);


    db.get('SELECT connections FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (!row) {
            // User not found
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Concatenate the new connection data with the existing connections (if any)
        //if (row.connections.name = "a"){
        //    const updatedConnections = newConnectionData
        //}else{
        const updatedConnections = row.connections ? `${row.connections},${newConnectionData}` : newConnectionData;
        //}
        // Update the connections field in the database
        db.run('UPDATE users SET connections = ? WHERE username = ?', [updatedConnections, username], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                console.log(updatedConnections);
                res.status(200).json({ message: 'Connections updated successfully' });
            }
        });
    });
});



app.get("/api/getBodies/:username", (req,res) => {
    const {username} = req.params
    console.log(username)
    db.get('SELECT connections FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.log("hey we not chillin!!")
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (!row) {
            // User not found
            console.log("hey we not not chillin!!")
            res.status(404).json({ error: 'User not found' });
            return;
        }
 
        // Parse the connections JSON string into an object
        connections = JSON.parse(`[${row.connections}]`);
        console.log(connections)
        // Send the connections as a JSON response
        res.status(200).json({connections});
    });
});


app.get("/api/isSafe/:username", (req,res) => {
    const {username} = req.params
    console.log(username)
    db.get('SELECT safety FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.log("hey we not chillin!!")
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (!row) {
            // User not found
            console.log("hey we not not chillin!!")
            res.status(404).json({ error: 'User not found' });
            return;
        }
 


        res.status(200).send(row.safety);
    });
});
   



app.post('/api/changeSafety/:username', (req, res) => {
    const username = req.params.username;
    var isSafe = req.body.safety
    var safeDate = req.body.safeDate
    if (isSafe == "n"){

        db.get('SELECT connections FROM users WHERE username = ?', [username], (err, row) => {
            if (err) {

                console.error(err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
    
            if (!row) {
                // User not found

                res.status(404).json({ error: 'User not found' });
                return;
            }
 
            // Parse the connections JSON string into an object
            connections = JSON.parse(`[${row.connections}]`);
            for (const connection of connections){
                const newname = connection.name;
                var connectDate = connection.date;
                connectDate = new Date(connectDate)
                console.log(connectDate)
                safeDate = new Date(safeDate)
                console.log(safeDate)
                if (connectDate > safeDate){
                db.run('UPDATE users SET safety = ? WHERE username = ?', [isSafe, newname], (err) => {
                    if (err) {
                        console.error(err);
                        res.status(500).json({ error: 'Internal server error' });
                    } else {
                        console.log("changed",newname,"safety to",isSafe)
                    }
                });
            }






            }

        });
    }
        // Update the connections field in the database
        db.run('UPDATE users SET safety = ? WHERE username = ?', [isSafe, username], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                console.log("changed",username,"safety to",isSafe)

            }
        });
    });






    import React from 'react';







    // const Home = () => {
    
    
    //     const addUser =  async () => {
    //         var username = document.getElementById("username").value
    //         var password = document.getElementById("password").value
    //             try {
    //                 const response = await fetch('http://localhost:5000/api/users', {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({ username, password }),
    //                 });
        
    //                 if (response.ok) {
    //                     // User added successfully
    //                     console.log('User added successfully');
    //                 } else {
    //                     // Handle error response
    //                     console.error('Failed to add user');
    //                 }
    //             } catch (error) {
    //                 console.error('Error:', error);
    //             }              
    
    //     };
    //     const addBody = async () => {
    //         var username = document.getElementById("username").value
    //         var name = document.getElementById("name").value
    //         var date = document.getElementById("date").value
    //         var type = document.getElementById("type").value
    //         var gave = document.getElementById("gave").value
    //         var protect = document.getElementById("protection").value
    //         try {
    //             const response = await fetch(`http://localhost:5000/api/writeBodies/${username}`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ name,date,protect,type,gave }),
    //             });
    //             console.log("yoyo")
    //             if (response.ok) {
    //                 // User added successfully
    //                 console.log('Body added successfully');
    //             } else {
    //                 // Handle error response
    //                 console.error('Failed to add body');
    //             }
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    
    //     }
    
    //     const getBodies = () => {
    //         var username = document.getElementById("username").value
    //         console.log(username)
    //     fetch(`http://localhost:5000/api/getBodies/${username}`).then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then(data => {
    //     // Handle the data returned from the API
    //     //console.log(data)
    //     document.getElementById("bodies").textContent = ""
    //     for (const index in data.connections){
    //         for (const key in data.connections[index]) {
    //             document.getElementById("bodies").textContent += `${key}: ${data.connections[index][key]} `;
    //         }
    //         document.getElementById("bodies").textContent += "         "
    //     }
    
    //     //for (const key in data.connections[2]){
    //     //    console.log(key,data.connections[2][key])
    //     //}
    //     })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('There was a problem with the fetch operation:', error);
    //   });
    //     }
    
    
    
    
    
    
    
    
    //     const changeSafety =  async () => {
    //         var username = document.getElementById("username").value
    //         var safety = document.getElementById("isSafe").value
    //         var safeDate = document.getElementById("safeDate").value
    //             try {
    //                 const response = await fetch(`http://localhost:5000/api/changeSafety/${username}`, {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({safety,safeDate}),
    //                 });
        
    //                 if (response.ok) {
    //                     // User added successfully
    //                     console.log('User added successfully');
    //                 } else {
    //                     // Handle error response
    //                     console.error('Failed to add user');
    //                 }
    //             } catch (error) {
    //                 console.error('Error:', error);
    //             }              
    
    //     };
    
    
    
    
    
    
    
    
    //     return (
            
    
    
    //         <div>
    //             <h1>hello</h1>
    //             <h1>1 in 5 People in the US have an STI</h1>
    //             For many of these diseases, symptoms take a long time to appear, or never do
    
    //             Testing is vital
    //             But how to tell others you have an infection?
    //             <label for="username">Username:</label>
    //             <input type="text" id="username" name="username"/>
    
    //             <label for="password">Password:</label>
    //             <input type="password" id="password" name="password" />
    
    //             <button class="btn" onClick={addUser} >Login</button>
    
    
    //             FOR BODIES:
    //             <label for="name">Name:</label>
    //             <input type="text" id="name" name="name"/>
    
    //             <label for="date">Date: MM/DD/YY</label>
    //             <input type="text" id="date" name="date" />
    
    //             <label for="protection">Used Protection: y or n</label>
    //             <input type="text" id="protection" name="protection"/>
    
    //             <label for="type">Anal, oral, Vaginal:</label>
    //             <input type="text" id="type" name="type" />
    //             <label for="gave">Gave or Received:</label>
    //             <input type="text" id="gave" name="gave"/>
    //             <button class="btn" onClick={addBody} >Add Body</button>
    
    //             <button class ="btn" onClick ={getBodies}> Display bodies</button>
    //             <p id = "bodies"></p>
    
    //             <label for ="safeDate">Last date tested MM/DD/YY</label>
    //             <input type="text" id="safeDate" name= "safeDate"/>
    
    //             <label for ="isSafe">safe or not y/n</label>
    //             <input type="text" id="isSafe" name= "isSafe"/>
    //             <button class= "btn" onClick = {changeSafety}> change safety of bodies </button>
    
    
    
    
    
                
    //         </div>
    //     )
    // }
    
    
    
    
    
    
    
    
    // export default Home;