import React, { Component, useState } from 'react';

function AddCDOfferings (){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [id, setId] = useState('')
    const [term, setTerm] =useState('')
    const [intrestRate, setIntrestRate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FirstName: ", firstName, "LastName: ", lastName, "ID: ", id, "Term: ", term, "IntrestRate: ", intrestRate);
    }

    return(
        <div className="container">
            <h1>CD Offerings</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <br />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <br />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>ID</label>
                    <br />
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div>
                    <label>Term</label>
                    <br />
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
                <div>
                    <label>Intrest Rate</label>
                    <br />
                    <input type="text" value={intrestRate} onChange={(e) => setIntrestRate(e.target.value)} /> 
                </div>
                <button>Add CD Offerings</button>
            </form>
        </div>
    )
}

export default AddCDOfferings
