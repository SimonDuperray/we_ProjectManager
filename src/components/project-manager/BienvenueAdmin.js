import React, { Component } from 'react'

import Popup from "reactjs-popup"
import adminlist from '../adminlist'

class BienvenueAdmin extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Popup
                    trigger={
                        <h3
                            style={{
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                        >
                            Bienvenue sur votre compte administrateur
                        </h3>
                    }
                    position="bottom center"
                >
                    {
                        close => (
                            <div>
                                Admin(s): { adminlist }
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className="close" onClick={close}>
                                    &times;
                                </a>
                            </div>
                        )
                    }
                </Popup>
            </div>
        )
    }
}

export default BienvenueAdmin