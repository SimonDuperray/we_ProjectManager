// import React from 'react';

// const Header = ({ pseudo, cpt }) => {
//     return (
//         <header>
//             <div className="rows">
//                 <h1 className="row">{pseudo}'s Project Manager</h1>
//                 <button id="revealHeader" className="row">+</button>
//             </div>
//             <h3 id="cptProj">{cpt} projets en cours!</h3>
//             <a id="fireLink" target="_blank" href="https://console.firebase.google.com/project/projectmanager-67f9c/database/projectmanager-67f9c/data">RealTime DataBase - Firebase</a>
//         </header>
//     )
// }

// export default Header;

// CLASS COMPONENT TRANSFORM

import React from 'react'

class Header extends React.Component {
    state = {
        nStateHeader: false,
        signButton: '+'
    }
    toggleHeaderInfo = () => {
        if(this.state.signButton==="+") {
            this.state.signButton = "-"
        } else {
            this.state.signButton = "+"
        }
        this.setState({ nStateHeader: !this.state.nStateHeader })
    }
    render() {
        const { pseudo, cpt } = this.props
        return(
            <header>
                {
                    !this.state.nStateHeader ? (
                        <div className="rows">
                            <h1 className="row">{pseudo}'s Project Manager</h1>
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
                            <div className="rows">
                                <h1 className="row">{pseudo}'s Project Manager</h1>
                                <button 
                                    className="row" 
                                    id="revealHeader"
                                    onClick={() => this.toggleHeaderInfo()}
                                >
                                    {this.state.signButton}
                                </button>
                            </div>
                            <h3 id="cptProj">{cpt} projets en cours!</h3>
                            <a id="fireLink" target="_blank" href="https://console.firebase.google.com/project/projectmanager-67f9c/database/projectmanager-67f9c/data">RealTime DataBase - Firebase</a>
                        </div>
                    )
                }
            </header>
        )
    }
}

export default Header