import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BlurbContainer, HomeImg, BlurbButton, BlurbText } from '../Components/Home.Styles.js'



const WriteConnections = () => {
    const addBody = async () => {
        const username = localStorage.getItem('username').replace(/"/g, '');
        var name = document.getElementById("name").value
        var date = document.getElementById("date").value
        var type = document.getElementById("type").value
        var gave = document.getElementById("gave").value
        var protect = document.getElementById("protection").value
        try {
            const response = await fetch(`http://localhost:5000/api/writeBodies/${username}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name,date,protect,type,gave }),
            });
            console.log("yoyo")
            if (response.ok) {
                // User added successfully
                console.log('Body added successfully');
            } else {
                // Handle error response
                console.error('Failed to add body');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }
    return (

            
            <div>
            <h1>YAYAYYA</h1>
            <HomeContainer>
                <BlurbContainer>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"/>

            <label for="date">Date: MM/DD/YY</label>
            <input type="text" id="date" name="date" />

            <label for="protection">Used Protection: y or n</label>
            <input type="text" id="protection" name="protection"/>

            <label for="type">Anal, Oral, Vaginal:</label>
            <input type="text" id="type" name="type" />

            <label for="gave">Gave or Received:</label>
            <input type="text" id="gave" name="gave"/>
            </BlurbContainer>
            <BlurbContainer>
            <BlurbButton class="btn" onClick={addBody} >Add Body</BlurbButton>
            </BlurbContainer>
            
            </HomeContainer>
            </div>
        
    )
}

export default WriteConnections;