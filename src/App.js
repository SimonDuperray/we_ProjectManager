import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/project-manager/Header'
import Admin from './components/project-manager/Admin'
import Card from './components/project-manager/Card'
import BienvenueAdmin from './components/project-manager/BienvenueAdmin'
import TodoList from './components/todo-list/TodoList'
import Filters from './components/project-manager/Filters'

// Firebase
import base from './base'

localStorage.setItem('listFilters', [])

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    cpt: 0,
    nState: false,
    toggleAdminPartInner: 'Show',
    projects : {},
    toggleDisplayTDL: false,
    toggleDisplayTDLInner: 'Show',
    activeFilter: '',
    adminList: '',
    categories: ''
  }

  componentDidMount() {
    this.ref = base.syncState('/StockedData/adminlist', {
      context: this,
      state: "adminList"
    })
    this.ref = base.syncState(`/${this.state.pseudo}/projects`, {
      context: this,
      state: 'projects'
    })
    this.ref = base.syncState('/StockedData/categories', {
      context: this,
      state: 'categories'
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

  runMailScript = () => {
    window.open("file:///C:\Users\simon\OneDrive\Documents\PROGRAMMATION\PROJETS-ETE2020\CP_ELECTRONJS\project-manager\project-manager\run.bat")
    console.log('opened')
  }

  deleteProject = key => {
    let isCorrect = false
    let CONFIRMATION_CODE = Math.random().toString(36)
    let PROJECT_DELETED = ''
    let NEW_DATE_OBJECT = new Date()
    const CURRENT_DATE = NEW_DATE_OBJECT.getFullYear()+'/'+(NEW_DATE_OBJECT.getMonth()+1)+'/'+NEW_DATE_OBJECT.getDate()+'-'+NEW_DATE_OBJECT.getHours()+'h'+NEW_DATE_OBJECT.getMinutes()+'min'+NEW_DATE_OBJECT.getSeconds()+'s'
    console.log(CONFIRMATION_CODE)
    var askForCode = prompt('Confirmation code') 
    switch(true) {
      case askForCode===CONFIRMATION_CODE:
        isCorrect = true
        break;
      case askForCode!==CONFIRMATION_CODE:
        break;
    }
    if(isCorrect) {
      const projects = { ...this.state.projects }
      PROJECT_DELETED = projects[key].nom
      console.log(PROJECT_DELETED+' was deleted at ' + CURRENT_DATE+' by '+this.state.pseudo+' with the next code: '+CONFIRMATION_CODE)
      projects[key] = null
      this.setState({ projects })
    } else {
      // get ip from user
      alert('wrong code, a mail\'ll be sent to the administrator to check your identity')
    }
    CONFIRMATION_CODE = ''
  }

  // optimize toggleAdminPart & toggleTDLPart with event target name

  toggleAdminPart = () => {
    switch(true) {
      case this.state.toggleAdminPartInner==="Show":
        this.state.toggleAdminPartInner="Hide"
        break
      case this.state.toggleAdminPartInner!=="Show":
        this.state.toggleAdminPartInner="Show"
        break
    }
    this.setState({ nState: !this.state.nState })
  }

  toggleTDLPart = () => {
    switch(true) {
      case this.state.toggleDisplayTDLInner==="Show":
        this.state.toggleDisplayTDLInner = "Hide"
        break
      case this.state.toggleDisplayTDLInner!=="Show":
        this.state.toggleDisplayTDLInner = "Show"
        break
    }
    this.setState({ toggleDisplayTDL: !this.state.toggleDisplayTDL })
  }

  filter = event => {
    // const declarations
    const checkboxes_ = document.querySelectorAll('.checkboxes')
    const resultsStates = new Array
    let cptTrue = 0
    let finalUpdateState = ''
    // get all states from checkboxes
    for(let i=0; i<checkboxes_.length; i++) {
      if(checkboxes_[i].checked===true) {
        resultsStates.push(true)
      } else {
        resultsStates.push(false)
      }
    }
    // count nb of true in result array
    for(let j=0; j<resultsStates.length; j++) {
      if(resultsStates[j]===true) {
        cptTrue += 1
      } 
    }
    // transform to switch/case
    if(cptTrue===1) {
      finalUpdateState = event.target.name
    } else if(cptTrue>1) {
      alert('Choose only one filter + state empty')
      for(let i=0; i<checkboxes_.length; i++) {
        checkboxes_[i].checked = false
      }
    }
    this.setState({ activeFilter: finalUpdateState })
  }

  renderCards = isFilter => {
    let cards = ''
    const listProjId = new Array
    const test_ = Object.keys(this.state.projects)
    for(let i=0; i<test_.length; i++) {
      listProjId.push((test_)[i])
    }
    // if no filter => render basics cards
    if(isFilter==='') {
      cards = Object.keys(this.state.projects)
        .map(key => <Card key={key} details={this.state.projects[key]} />)
    } 
    // if filter => keep only corresponding cards to render it
    else {

    }
    return cards
  }

  render () {
    const cards = Object.keys(this.state.projects)
      .map(key => <Card key={key} details={this.state.projects[key]}/>)
      // update cpt
    this.state.cpt = cards.length

    const CATEGORIES = Object.keys(this.state.categories)

    return (
      <div className='box'>
        <Header 
          pseudo={this.state.pseudo} 
          cpt={this.state.cpt}
        />
        {
            this.state.adminList === this.state.pseudo ? (
            <div className="bvnadmin">
              <BienvenueAdmin />
            </div>
          ) : (
            <div />
          )
        }

        <button
          className="toggleButton"
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

        <Filters />
        
        {
          <div className="cards">
            { this.renderCards(this.state.activeFilter) }
          </div>
        }
        
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