import React from 'react';

const Card = ({ details }) => {
    const notes = details.notes
        .split('\n')
        .map(item => <li key={item}>{item}</li>)
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

export default Card