import React, { Component } from 'react'

import adminlist from '../adminlist'

class Header extends Component {
    state = {
        nStateHeader: false,
        signButton: '+',
    }
    toggleHeaderInfo = () => {
        if(this.state.signButton==="+") {
            this.state.signButton="-"
        } else {
            this.state.signButton="+"
        }
        this.setState({ nStateHeader: !this.state.nStateHeader })    
    }
    render() {
        const { pseudo, cpt } = this.props  
        return(
            <header>
                {
                    !this.state.nStateHeader ? (
                        <div id="hiddenHeader" className="rows">
                            {
                                adminlist.includes(pseudo) ? (
                                    <h1 className="row">{pseudo}'s Project Manager *</h1>
                                ) : (
                                    <h1 className="row">{pseudo}'s Project Manager</h1>
                                )
                            }
                            <button 
                                className="row" 
                                id="revealHeader"
                                onClick={() => this.toggleHeaderInfo()}
                            >
                                {this.state.signButton}
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div id="showedHeader" className="rows">
                                {
                                    adminlist.includes(pseudo) ? (
                                        <h1 className="row">{pseudo}'s Project Manager *</h1>
                                    ) : (
                                        <h1 className="row">{pseudo}'s Project Manager</h1>
                                    )
                                }
                                <button 
                                    className="row" 
                                    id="revealHeader"
                                    onClick={() => this.toggleHeaderInfo()}
                                >
                                    {this.state.signButton}
                                </button>
                            </div>
                            <div id="moreInfoHeader">
                                <h3 id="cptProj">{cpt} projets en cours!</h3>
                                {
                                    adminlist.includes(pseudo) ? (
                                        <a 
                                            onClick={ () => this.toggleHeaderInfo() }
                                            id="fireLink" 
                                            target="_blank" 
                                            href="https://console.firebase.google.com/project/projectmanager-67f9c/database/projectmanager-67f9c/data"
                                        >
                                            RealTime DataBase - Firebase ↗
                                        </a>
                                    ) : (
                                        <div />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </header>
        )
    }
}

export default Header