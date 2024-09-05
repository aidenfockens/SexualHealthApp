import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BlurbContainer, HomeImg, BlurbButton, BlurbText } from '../Components/Home.Styles.js';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode }from 'jwt-decode';

// loggedIn variable
var logIn = false;

const LogIn = () => {
    const addUser =  async () => {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        addUserHelper(username, password)
    }; 

    const addUserHelper = async (username, password) => {
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
            
            localStorage.setItem('username', JSON.stringify(username));
            
            } else {
                // Handle error response
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
        }  
    }

    const logInUser = () => {

        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        console.log(username)
        logInHelper(username, password)
    }

    const logInHelper = (username, password) => {
        fetch(`http://localhost:5000/api/getPassword/${username}`).then(response => {
            if (!response.ok) {
                document.getElementById("loggedin").textContent = `Please enter a valid username or password.`
            }

            return response.json()
         }).then(data => {
            if (data.password == password){
                localStorage.setItem('username', JSON.stringify(username));
                document.getElementById("loggedin").textContent = `Logged in as ${username}`
            
                // mike here - this is to bring them to the dashboard
                window.location.pathname = '/status';
            }else{
                document.getElementById("loggedin").textContent = `Incorrect password or username, still logged in as Guest`
            }
         });
            }


    const ifExists = (username,password) => {
        fetch(`http://localhost:5000/api/ifExists/${username}`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
        }).then(data => {

        if (data.exists == "yes"){
            logInHelper(username,password)

        }else{
            addUserHelper(username,password)
        }
            });
        }
    
    return (
        <div>
        

            <HomeContainer>
            <BlurbContainer>
            <h1>Did you know: 1 in 5 people have an STI</h1>
            <p>Our App deals with that problem!</p>
            <p>Keep up to date on your partners, symptoms, and health clinics. Alert others when you contract something, and feel at ease knowing you're STI clean otherwise!</p>
            <p>The shame and anxiety of telling others you have an STI is gone. Our application is fully anonymous, yet can alert all of your partners as soon as something is wrong. This ensures there are no barriers to staying informed!</p>
            <p>Get started by creating an account, and adding bodies! </p>
           
            </BlurbContainer>
            <BlurbContainer>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />

            <p  >Make sure your username is your first and last name, both capital and no space!</p>
            <BlurbButton className="btn" onClick={addUser} >Sign up</BlurbButton>
            <BlurbButton className="btn" onClick={logInUser} >Log in</BlurbButton>

            <div className="g-signin2 oauthLogin" data-onsuccess="onSignIn"></div>

            {/* This is some oauth button login we've got from the npm documentation tutorial */}
            <GoogleLogin className="oauthLogin"
            onSuccess={credentialResponse => {

                // get the credential response
                console.log(credentialResponse);
                
                // decode the jwt
                const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);

                // grab their name for the user
                const user = USER_CREDENTIAL.name.split(" ").join("");
                console.log(user)
                // use their email as their password lol
                const pass = USER_CREDENTIAL.email;
                console.log(pass)
                
                // check the database for the user (their name lol)
                ifExists(user,pass)


                // redirect their ass
                window.location.pathname = '/status';
            }}/>
            
            <h2 id="loggedin"></h2>
            </BlurbContainer>
            


            </HomeContainer>
        </div>
    )
}

export default LogIn;