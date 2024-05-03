import React from 'react';
import { Link } from 'react-router-dom';

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
    for (const index in data.connections){
        for (const key in data.connections[index]) {
            document.getElementById("bodies").textContent += `${key}: ${data.connections[index][key]}`;
        }
    }
    })
    .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
    });
    }
    return (
        <div>
            <h1>YAYAYAY</h1>
            <button class ="btn" onClick ={getBodies}> Display bodies</button>
            <p id = "bodies"></p>
        </div>
    )
}

export default ViewConnections;