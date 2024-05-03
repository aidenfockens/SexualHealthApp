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
                    document.getElementById("loggedin").textContent = `Logged in as ${username}`

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
        var newpassword = document.getElementById("password").value
        console.log(username)
        fetch(`http://localhost:5000/api/getPassword/${username}`).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json()
 }).then(data => {

    if (data.password == newpassword){
        localStorage.setItem('username', JSON.stringify(username));
        document.getElementById("loggedin").textContent = `Logged in as ${username}`
        
    }else{
        document.getElementById("loggedin").textContent = `Incorrect password or username, still logged in as ${localStorage.getItem('username').replace(/"/g, '')}`
    }
 });
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
            <h2 id="loggedin"></h2>
        </div>
    )
}

export default LogIn;