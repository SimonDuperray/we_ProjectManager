import React, { Component } from 'react'
// CSS
import './App.css'
import projects from './projects'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    projects : {}
  }

  loadExample = () => this.setState({ projects })

  render () {
    const cards = Object.keys(this.state.projects)
      .map(key => <Card key={key} details={this.state.projects[key]}/>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className='cards'>
          { cards }
        </div>
        <Admin loadExample={this.loadExample}/>
      </div>
    )
  }
}

export default App
