import { Component } from "react";
import { useState } from "react";
import React from 'react';

function CDAccount (){
    const [id, setId] = useState('')
    const [balance, setBalance] = useState('')
    const [lastName, setLastName] = useState('')
    const [accountHolder, setAccountHolder] = useState('')
    const [cdOffering, setCdOffering] = useState('')

    const handleSubmit = (e) => {
        e.preventDDefault();
        console.log("LastName: ", lastName, "AccountHolder: ", accountHolder, "ID: ", id, "Balance: ", balance);
    }

    return(
        <div className="container">
            <h1>CD Account</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Last Name</label>
                    <br />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Account Holder</label>
                    <br />
                    <input type="text" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} /> 
                </div>
                <div>
                    <label>ID</label>
                    <br />
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> 
                </div>
                <div>
                    <label>Balance</label>
                    <br />
                    <input type="text" value={balance} onChange={(e) => setBalance(e.target.value)} />
                </div>
                <div>
                    <label> CD Offering </label>
                    <br />
                    <input type="text" value={cdOffering} onChange={(e) => setCdOffering(e.target.value) }  />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <button  type="submit">Add CDAccount</button>
                    </form>
                </div>
            </form>
        </div>
    )
}

export default CDAccount
