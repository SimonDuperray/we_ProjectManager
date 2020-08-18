import React from 'react';

const Card = ({ details }) => {
    const notes = details.notes
        .split('.')
        .map(item => <li key={item}>{item}</li>)
    return (
        <div className="card">
            <div className="recette">
                <h2>{details.nom}</h2>
                <div className="liste-ingredients">
                    <h4>{ details.description }</h4>
                </div>
                <ul className="liste-instructions">
                    { notes }
                </ul>
            </div>
        </div>
    )
}

export default Card