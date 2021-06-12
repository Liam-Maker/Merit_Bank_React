import React, { Component } from 'react'

export class CreateUser extends Component {
    render() {
        return (
            <div className="App">
                <form action="" method="post">
                    <h2 className="title">Create User</h2>
                    <div className="input-container">
                        <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    </div>

                    <div className="input-container">
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-container">
                        <input type="text" placeholder="Active" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-container">
                        <input type="password" placeholder="Role" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-container">
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateUser
