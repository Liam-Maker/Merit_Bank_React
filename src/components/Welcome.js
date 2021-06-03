import React from 'react'

constructor() {
    super()
    this.state={
        message: 'Welcome User'
    }
}

const WelcomeUser = () => {
    return(
        <div>
            <h1>
                {this.state.message}
            </h1>
            <button type="button" class="btn btn-danger">Sign out</button>
        </div>
    )
}

export default WelcomeUser