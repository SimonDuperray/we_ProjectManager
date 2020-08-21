import React from 'react';

const Card = ({ details }) => {
    const notes = details.notes
        .split('\n')
        .map(item => <li key={item}>{item}</li>)
    // const notes = details.notes
    //     .split('\n')
    //     .map(item => {
    //         {
    //             console.log(details.notes[0])
    //         }
    //     })
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