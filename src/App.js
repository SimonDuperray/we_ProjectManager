import React, { Component } from 'react'
// CSS
import './App.css'
import projects from './projects'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    projects : {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/projects`, {
      context: this,
      state: 'projects'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addProject = project => {
    const projects = { ...this.state.projects }
    projects[`project-${Date.now()}`] = project
    this.setState({ projects })
  }

  updateProject = (key, newProject) => {
    const projects = { ...this.state.projects }
    projects[key] = newProject
    this.setState({ projects })
  }

  deleteProject = key => {
    const projects = {  ...this.state.projects}
    projects[key] = null
    this.setState({ projects })
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
        <Admin 
          projects={this.state.projects}
          loadExample={this.loadExample}
          updateProject={this.updateProject}
          addProject={this.addProject}
          deleteProject={this.deleteProject}
        />
      </div>
    )
  }
}

export default App
