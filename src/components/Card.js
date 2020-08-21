import React, { Component } from 'react'

class Card extends Component {
    state = {
        checkboxState: false,
    }
    render() {
        const { details } = this.props
        const notes = details.notes
        .split('\n')
        .map(item => 
            <div className="rows">
                <li className="row" key={item}>{item}</li>
                <input className="row" type="checkbox"/>
            </div>
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