import React, { Component } from 'react'

class WelcomeHeader extends Component {
    render() {
        const { pseudo } = this.props
        return(
            <div>
                <h1 className="row">pseudo:</h1>
            </div>
        )
    }
}

export default WelcomeHeader