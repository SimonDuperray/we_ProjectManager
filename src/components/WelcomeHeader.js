import React, { Component } from 'react'

class WelcomeHeader extends Component {
    render() {
        const { pseudo, welcome } = this.props
        return(
            <div className="row">
                <h1
                    pseudo={pseudo} 
                    welcome={welcome} 
                    className="row"
                >
                    {pseudo}{welcome}
                </h1>
            </div>
        )
    }
}

export default WelcomeHeader