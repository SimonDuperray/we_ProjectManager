import React, { Component } from 'react'

import categorieslist from '../categorieslist'

import InvalidCategory from './InvalidCategory'

class Card extends Component {
    state = {
        isFinished: false
    }

    checkBold = () => {
        let notesString = this.props.details.notes
        return notesString
    }

    // handleFinished = () => {
    //     this.setState({ isFinished: !this.state.isFinished })
    // }

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
            <div className={ this.state.isFinished ? 'finishedCard' : 'card' }>
                    <div className="recette">
                        <h2 class="projectTitle" >{details.nom}</h2>
                        {/* <div>
                            <input 
                                type="checkbox" 
                                name="isFinished" 
                                id="isFinished" 
                                className="isFinishedClass"
                                onChange={ () => this.handleFinished() }
                            />
                            &nbsp;
                            <label id="isFinishedLabel" for="isFinished">Finished/StableVersion</label>
                        </div> */}
                        {
                            !details.categories ? (
                                <InvalidCategory />
                            ) : (
                                <div />
                            )
                        }
                        {
                            categorieslist.includes(details.categories) ? (
                                <p className="infoCardRight">
                                    Category:
                                    &nbsp;&nbsp;
                                    <span style={{fontWeight: 'bold'}}>
                                        {
                                            details.categories
                                        }
                                    </span>     
                                </p>
                            ) : (
                                
                                <p class="infoCardRight">
                                    Category:
                                    &nbsp;
                                    <span style={{fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline'}}>
                                        invalid
                                    </span>
                                </p>
                            )
                        }
                        {
                            details.command ? (
                                <p className="infoCardRight">
                                    BatchCommand:  
                                    <span 
                                        style={{fontWeight: 'bold', marginLeft: '5px'}}>
                                        {details.command}
                                    </span>
                                </p>
                            ) : (
                                <div />
                            )
                        }
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