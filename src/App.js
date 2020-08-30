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
    activeFilter: ''
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

  filter = event => {
    // const checkboxes_ = document.querySelectorAll('.checkboxes')
    // const cpt = new Array
    // const result = ''
    // if(this.state.activeFilter !== '') {
    //   for(let i=0; i<checkboxes_.length; i++) {
    //     if(checkboxes_[i].name !== this.state.activeFilter) {
    //       checkboxes_[i].checked = false
    //     } else if(checkboxes_[i].checked === false) {
    //       cpt.push(checkboxes_[i].checked)
    //     } else {
    //       cpt.push(true)
    //     }
    //   }
    //   if(!cpt.includes(true)) {
    //     console.log('state vide')
    //   } else {
    //     result = event.target.name
    //   }
    //   this.setState({ activeFilter: result })
    //   console.log(this.state.activeFilter)
    // }
    const checkboxes_ = document.querySelectorAll('.checkboxes')
    const cpt = new Array
    for(let i=0; i<checkboxes_.length; i++) {
      if(checkboxes_[i].checked===true) {
        cpt.push(true)
      } else {
        cpt.push(false)
      }
    }
    console.log('result:'+cpt)
  }

  render () {
    const cards = Object.keys(this.state.projects)
      .map(key => <Card key={key} details={this.state.projects[key]}/>)
    // update cpt
    this.state.cpt = cards.length
  
    return (
      <div className='box'>
        <button
          onClick={() => {
            const check = document.querySelectorAll('.checkboxes')
            const cpt = new Array
            for(let i=0; i<check.length; i++) {
              // changer de système (récupérer dynamiquement le nombre de filtes)
              // et vérifier si la longueur de cpt === nbFiltres
              // au lieu de push true
              if(check[i].checked === false) {
                cpt.push(check[i].checked)
              } else {
                cpt.push(true)
              }
            }
            if(!cpt.includes(true)) {
              this.setState({ activeFilter: '' })
              console.log('state vide')
            } else {
              console.log('some true')
            }
            console.log(cpt)
          }}
        >
          Test
        </button>
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
                className="checkboxes"
                name="IA"
                type="checkbox"
                ref="IA"
                onChange={ this.filter }
              />
              &nbsp;
              <label for="IA">IA</label>
            </div>
            <div className="row">
              <input 
                className="checkboxes"
                name="WebSite-App"
                type="checkbox"
                ref="WebSite-App"
                onChange={ this.filter }
              />
              &nbsp;
              <label for="WebSite-App">WebSite-App</label>
            </div>
            <div className="row">
              <input 
                className="checkboxes"
                name="Software"
                type="checkbox"
                ref="Software"
                onChange={ this.filter }
              />
              &nbsp;
              <label for="Software">Software</label>
            </div>
            <div className="row">
              <input 
                className="checkboxes"
                name="AppMobile"
                type="checkbox"
                ref="AppMobile"
                onChange={ this.filter }
              />
              &nbsp;
              <label for="AppMobile">AppMobile</label>
            </div>
            <div className="row">
              <input 
                className="checkboxes"
                name="Autres"
                type="checkbox"
                ref="Autres"
                onChange={ this.filter }
              />
              &nbsp;
              <label for="Autres">Autres</label>
            </div>
          </div>
        </div>

        {
          this.state.activeFilter ? (
            <h1>Quelque chose</h1>
          ) : (
            <div className="cards">
              { cards }
            </div>
          )
        }
        
        {/* <div className='cards'>
          { cards }
        </div>   */}


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