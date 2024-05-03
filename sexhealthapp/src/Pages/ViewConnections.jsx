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
        var jsonDiv = document.createElement("div")
        jsonDiv.classList.add("connectionsDiv")
        for (const key in data.connections[index]) {
            document.getElementById("connectionsDiv").textContent += `${key}: ${data.connections[index][key]}`;
        }
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
            <button class ="btn" onClick ={getBodies}> Display bodies</button>
            <div id = "bodies"></div> 
        </connectionsDiv>
    )
}

export default ViewConnections;