import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const addUser =  async () => {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        localStorage.setItem('username', JSON.stringify(username));
            try {
                const response = await fetch('http://localhost:5000/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
    
                if (response.ok) {
                    // User added successfully
                    console.log('User added successfully');
                } else {
                    // Handle error response
                    console.error('Failed to add user');
                }
            } catch (error) {
                console.error('Error:', error);
            }  
        }; 


    const logInUser = () => {
        var username = document.getElementById("username").value
        console.log(username)
        localStorage.setItem('username', JSON.stringify(username));
    }
    return (
        <div>
            <h1>YAYAYAY</h1>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button class="btn" onClick={addUser} >Sign up</button>
            <button class="btn" onClick={logInUser} >Log in</button>
        </div>
    )
}

export default LogIn;