import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BlurbContainer, HomeImg, BlurbButton, BlurbText } from '../Components/Home.Styles.js'

const Status = () => {
    
    const getStatus = () => {
        const username = localStorage.getItem('username').replace(/"/g, '');
        console.log(username)
        fetch(`http://localhost:5000/api/getSafety/${username}`).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json()
 }).then(data => {

    if (data.safety != "y"){
        document.getElementById("diagnosis").style.display = "block"
        document.getElementById("diagnosis").textContent = `Potential Diagnosis: ${data.safety}`

        document.getElementById("safe").style.display = "none"
        document.getElementById("unsafe").style.display = "block"
        document.getElementById("unsafetitle").style.display = "block"
        document.getElementById("unsafebutton").style.display = "block"

    }else{
        
        document.getElementById("safe").style.display = "block"
        document.getElementById("unsafe").style.display = "none"
        document.getElementById("unsafetitle").style.display = "none"
        document.getElementById("unsafebutton").style.display = "none"
        document.getElementById("diagnosis").style.display = "none"
    }
        });
}

    const changeSafety =  async (safety) => {
        const username = localStorage.getItem('username').replace(/"/g, '');
        console.log(safety)
        var safeDate = document.getElementById("safeDate").value
            try {
                const response = await fetch(`http://localhost:5000/api/changeSafety/${username}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({safety,safeDate}),
                });
    
                if (response.ok) {
                    // User added successfully
                    console.log('updated safety');
                } else {
                    // Handle error response
                    console.error('Failed to update safety');
                }
            } catch (error) {
                console.error('Error:', error);
            }              

    };






    if (localStorage.getItem('username').replace(/"/g, '') != "Guest"){
        getStatus()
    }
    return (
        <div>
            
            <h1>YAYAYAY</h1>
            <HomeContainer>
            <BlurbContainer>
            <h1 style={{ display: 'none' }}  id = "unsafetitle">One of your partners has reported an STD</h1>
            <p style={{ display: 'none' }}  id = "diagnosis"></p>
            <p style={{ display: 'none' }} id = "unsafe">They had not been tested before you met. You should get tested immediately, and do not have any sexual relations with anyone else.</p>
            <BlurbButton style={{ display: 'none' }} onClick = {() => changeSafety("y")} id = "unsafebutton">Clean? Then press! </BlurbButton>
            <p style={{ display: 'none' }} id = "safe">None of your partners have reported an STD. You should be good!</p>
            </BlurbContainer>
            <BlurbContainer>
            <h1>If you have tested positive:</h1>
            <label for ="safeDate">Date of last clean test (MM/DD/YY):</label>
            <input type="text" id="safeDate" name= "safeDate"/>
    
            <label for ="isSafe">Please input your Diagnosis:</label>
            <input type="text" id="isSafe" name= "isSafe"/>
            <BlurbButton class= "btn" onClick = {() => changeSafety(document.getElementById("isSafe").value)}> Update Partners </BlurbButton>
            </BlurbContainer>
            </HomeContainer>

        </div>
    )
}

export default Status;