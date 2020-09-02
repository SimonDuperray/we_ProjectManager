import React from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends React.Component {
  state = {
    pseudo: '',
    password: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    // to store on firebase
    const PASSWORD = "JaX2hLyt"

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>Project Manager</h1>
          <input
            name="pseudo"
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
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          placeholder='Password'
          required />

          {
            this.state.password===PASSWORD ? (
              <button type="submit">Go</button>
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