import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import base from '../../base'

class Connexion extends Component {
  state = {
    pseudo: '',
    password: '',
    correctPassword: '',
    goToApp: false
  }

  componentDidMount() {
    this.ref = base.syncState('/StockedData/password', {
      context: this,
      state: "correctPassword"
    })
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    event.preventDefault()
    let PASSWORDCLASSLIST = document.querySelector('#passwordinput').classList
    let DEVNAMECLASSLIST = document.querySelector('#pseudoinput').classList
    this.setState({ [event.target.name]: event.target.value })
    if(event.target.name==="password" && this.state.password===this.state.correctPassword) {
      PASSWORDCLASSLIST.add('connexionCorrect')
      DEVNAMECLASSLIST.add('connexionCorrect')
    } else {
      PASSWORDCLASSLIST.remove('connexionCorrect')
      DEVNAMECLASSLIST.remove('connexionCorrect')
    }
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>Project Manager</h1>
          <input
            name="pseudo"
            id="pseudoinput"
            type='text'
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder='Nom du Développeur'
            pattern='[A-Za-z-]{1,}'
            required />
          <input
          style={{
            marginTop: '15px'
          }}
          name="password"
          id="passwordinput"
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          placeholder='Password'
          required />

          {
            this.state.password===this.state.correctPassword ? (
              <button id="gobtn" type="submit">Go</button>
            ) : (
              <div />
            )
          }
          
          <p style={{fontSize: '11px', textAlign: 'center'}}>Pas de caractères spéciaux.</p>
        </form>
      </div>
    )
  }
}

export default Connexion