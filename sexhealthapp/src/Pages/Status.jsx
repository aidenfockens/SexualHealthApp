import React from 'react';
import { Link } from 'react-router-dom';

const Status = () => {

    const getStatus = () => {
        const username = localStorage.getItem('username').replace(/"/g, '');
        fetch(`http://localhost:5000/api/getSafety/${username}`).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json()
 }).then(data => {

    if (data.safety == "n"){
        document.getElementById("safe").style.display = "none"
        document.getElementById("unsafe").style.display = "block"
    }else{
        document.getElementById("unsafe").style.display="none"
        document.getElementById("safe").style.display = "block"
    }
 });
}

    const changeSafety =  async () => {
        const username = localStorage.getItem('username').replace(/"/g, '');
        var safety = document.getElementById("isSafe").value
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
            <h1 id = "safe"> You are Safe </h1>
            <h1 id = "unsafe">You are unsafe! Get tested stat </h1>
            
            <label for ="safeDate">Last date tested MM/DD/YY</label>
            <input type="text" id="safeDate" name= "safeDate"/>
    
            <label for ="isSafe">Have you gotten a diagnosis? If so, input n and the date you were last tested.</label>
            <input type="text" id="isSafe" name= "isSafe"/>
            <button class= "btn" onClick = {changeSafety}> change safety of bodies and yourself </button>

        </div>
    )
}

export default Status;