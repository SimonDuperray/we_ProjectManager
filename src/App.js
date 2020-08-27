import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/project-manager/Header'
import Admin from './components/project-manager/Admin'
import Card from './components/project-manager/Card'
import BienvenueAdmin from './components/project-manager/BienvenueAdmin'
import TodoList from './components/todo-list/TodoList'

// Firebase
import base from './base'
import adminlist from './components/adminlist'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    cpt: 0,
    nState: false,
    toggleAdminPartInner: 'Show',
    projects : {},
    toggleDisplayTDL: false,
    toggleDisplayTDLInner: 'Show'
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
    let d = new Date()
    projects[`project-${Date.now()}--${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`] = project
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

  toggleAdminPart = () => {
    if(this.state.toggleAdminPartInner==="Show") {
      this.state.toggleAdminPartInner = "Hide"
    } else {
      this.state.toggleAdminPartInner = "Show"
    }
    this.setState({nState: !this.state.nState})
  }

  toggleTDLPart = () => {
    if(this.state.toggleDisplayTDLInner==="Show"){
      this.state.toggleDisplayTDLInner="Hide"
    } else {
      this.state.toggleDisplayTDLInner="Show"
    }
    this.setState({ toggleDisplayTDL: !this.state.toggleDisplayTDL })
  }

  displayFilters = () => {
    // alert(this.refs.displayIA.checked)
  }

  render () {
    const cards = Object.keys(this.state.projects)
      .map(key => <Card key={key} details={this.state.projects[key]}/>)
    // update cpt
    this.state.cpt = cards.length
  
    return (
      <div className='box'>
        <Header 
          pseudo={this.state.pseudo} 
          cpt={this.state.cpt}
        />
        {
          adminlist.includes(this.state.pseudo) ? (
            <BienvenueAdmin />
          ) : (
            <div />
          )
        }

        <button
          class="toggleButton"
          onClick={() => this.toggleTDLPart()}
          style={{
            backgroundColor: '#3498DB',
            border: '1px solid black',
          }}
        >
          { this.state.toggleDisplayTDLInner } TodoList
        </button>

        {
          this.state.toggleDisplayTDL ? (
            <TodoList />
          ) : (
            <div />
          )
        }

        <div className="filtersRenderCards rows">
          <div className="filterTitle">
            <h3 id="noMgTitleFilters">Filters</h3>
          </div>
          <div className="flexRendering">
            <div className="row">
              <input 
                name="displayIA"
                type="checkbox"
                ref="displayIA"
                onChange={ this.displayFilters }
              />
              &nbsp;
              <label for="displayIA">IA</label>
            </div>
            <div className="row">
              <input 
                name="WebSite-App"
                type="checkbox"
                ref="WebSite-App"
                onChange={ this.displayFilters }
              />
              &nbsp;
              <label for="WebSite-App">WebSite-App</label>
            </div>
            <div className="row">
              <input 
                name="Software"
                type="checkbox"
                ref="Software"
                onChange={ this.displayFilters }
              />
              &nbsp;
              <label for="Software">Software</label>
            </div>
            <div className="row">
              <input 
                name="AppMobile"
                type="checkbox"
                ref="AppMobile"
                onChange={ this.displayFilters }
              />
              &nbsp;
              <label for="AppMobile">AppMobile</label>
            </div>
            <div className="row">
              <input 
                name="Autres"
                type="checkbox"
                ref="Autres"
                onChange={ this.displayFilters }
              />
              &nbsp;
              <label for="Autres">Autres</label>
            </div>
          </div>
          <div id="filterBtnContainer">
            <button id="filterBtn">
              Filter
            </button>
          </div>
        </div>

        <div className='cards'>
          { cards }
        </div>  
        <button
          class="toggleButton"
          onClick={() => this.toggleAdminPart()}
        >
          { this.state.toggleAdminPartInner } Admin Part
        </button>
        {
          this.state.nState ? (
            <div>
              <Admin 
                projects={this.state.projects}
                updateProject={this.updateProject}
                addProject={this.addProject}
                deleteProject={this.deleteProject}
              />
              <button
                id="toggleShowBtn"
                onClick={() => this.toggleAdminPart()}
              >
                { this.state.toggleAdminPartInner } Admin Part
              </button>
            </div>
          ) : (
            <div />
          )
        }
        <footer>
            <h1>© Simon Duperray</h1>
        </footer>
      </div>
    )
  }
}

export default App