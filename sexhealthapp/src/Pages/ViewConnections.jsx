import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BlurbContainer, HomeImg, BlurbButton, BlurbText } from '../Components/Home.Styles.js'

const ViewConnections = () => {
    const getBodies = () => {
        const username = localStorage.getItem('username').replace(/"/g, '');
        console.log(username)

    fetch(`http://localhost:5000/api/getBodies/${username}`).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    console.log(response)
    return response.json();
    })
    .then(data => {
    // Handle the data returned from the API
    //console.log(data)
    document.getElementById("bodies").textContent = ""
    var div = document.getElementById("bodies")
    for (const index in data.connections){
        
        // create a card per contact
        var jsonDiv = document.createElement("div")
        jsonDiv.classList.add("connectionsDiv")
        
        // make the text for each contact
        var cardText = document.createElement("p")
        // give it proper styling
        cardText.classList.add("connectionsPara")
        
        for (const key in data.connections[index]) {
            // add each line to the paragraph
            cardText.textContent += `${key.toUpperCase()}:\n ${data.connections[index][key]}\n`;
        }

        // add the paragraph to the card
        jsonDiv.appendChild(cardText);
        document.getElementById("bodies").appendChild(jsonDiv);
    }
    })
    .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
    });
    }
    return (
        <connectionsDiv>
            <h1>YAYAYAY</h1>
            <BlurbButton class ="btn" onClick ={getBodies}> Display bodies</BlurbButton>
            <div id = "bodies"></div> 
        </connectionsDiv>
    )
}

export default ViewConnections;