import React from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends React.Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
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
            id="askDevName"
            type='text'
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder='Nom du Développeur'
            pattern='[A-Za-z-]{1,}'
            required />
          <button type='submit'>GO</button>
          <p style={{fontSize: '11px', textAlign: 'center'}}>Pas de caractères spéciaux.</p>
        </form>
      </div>
    )
  }
}

export default Connexion
