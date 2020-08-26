import React, { Component } from 'react'

class HelpMarkdown extends Component {
    toggleHelper = cState => {
        if(cState) {
            alert('Double clic on note to bold it')
        }
        // else close alert
    }
    render() {
        return (
            <div style={{textAlign: 'center', padding: '0'}}>
                <h2
                    onMouseEnter={() => this.toggleHelper(true)}
                    onMouseLeave={() => this.toggleHelper(false)}
                >
                    ?
                </h2>
            </div>
        )
    }
}

export default HelpMarkdown