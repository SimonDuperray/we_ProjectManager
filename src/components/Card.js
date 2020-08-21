import React, { Component } from 'react'

class Card extends Component {
    checkBold = () => {
        let notesString = this.props.details.notes
        return notesString
    }
    render() {
        const { details } = this.props
        const notes = details.notes
            .split('\n')
            .map(item => 
                <li 
                    className="row" 
                    key={item}
                    // onDoubleClick={() => this.checkBold()}
                >
                    {item}
                </li>
            )
        return (
            <div className="card">
                <div className="recette">
                    <h2>{details.nom}</h2>
                    <div className="description">
                        <h4>{ details.description }</h4>
                    </div>
                    <ul>
                        { notes }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Card