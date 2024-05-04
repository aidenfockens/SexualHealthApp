import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BlurbContainer, HomeImg, BlurbButton, BlurbText } from '../Components/Home.Styles.js';

// loggedIn variable
var logIn = false;

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

                    // check if the fields are null:
                    if (username.length == 0 || password.length == 0) {
                        console.error('Error: Please enter a valid username or password')
                        document.getElementById("loggedin").textContent = `Please enter a valid username or password.`
                    } else {
                    console.log('User added successfully');
                    document.getElementById("loggedin").textContent = `Logged in as ${username}`
                    // change the address to the dashboard 
                    window.location.pathname = '/status';
                    
                    }
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
        document.getElementById("loggedin").textContent = `Please enter a valid username or password.`
    }

    return response.json()
 }).then(data => {

    if (data.password == newpassword){
        localStorage.setItem('username', JSON.stringify(username));
        document.getElementById("loggedin").textContent = `Logged in as ${username}`
    
        // mike here - this is to bring them to the dashboard
        window.location.pathname = '/status';
        
    }else{
        document.getElementById("loggedin").textContent = `Incorrect password or username, still logged in as Guest`
    }
 });
}







    
    return (
        <div>
            <h1>YAYAYAY</h1>
            <HomeContainer>
            <BlurbContainer>
            <h1>Did you know: 1 in 5 people have an STI</h1>
            <p>Our App deals with that problem!</p>
            <p>Keep up to date on your partners, symptoms, and health clinics. Alert others when you contract something, and feel at ease knowing you're STI clean otherwise!</p>
            <p>The shame and anxiety of telling others you have an STI is gone. Our application is fully anonymous, yet can alert all of your partners as soon as something is wrong. This ensures there are no barriers to staying informed!</p>
            <p>Get started at "add new bodies" by inputting your partners names, how wrote yours for your username! </p>
           
            </BlurbContainer>
            <BlurbContainer>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />

            <p  >Make sure your username is your first and last name, both capital and no space!</p>
            <BlurbButton class="btn" onClick={addUser} >Sign up</BlurbButton>
            <BlurbButton class="btn" onClick={logInUser} >Log in</BlurbButton>
            
            <h2 id="loggedin"></h2>
            </BlurbContainer>
            
            </HomeContainer>
        </div>
    )
}

export default LogIn;