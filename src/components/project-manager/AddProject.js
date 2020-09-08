import React, { Component } from 'react'

import base from '../../base'
import categoriesList from '../categorieslist'

var fs = require('fs')

class AddProject extends Component {
    state = {
        nom: '',
        categories: '',
        command: '',
        description: '',
        notes: '',
        pattern: ''
    }

    componentDidMount() {
        this.ref = base.syncState('/StockedData/categories', {
            context: this,
            state: 'categories'
        })
    }

    createPatternFolderProject = () => {
        var path = "C:/Users/simon/OneDrive/Documents/PROGRAMMATION/PROJETS-PM/testFolder"
        try{
            fs.mkdirSync(path)
            console.log('testFolder directory created')
        } catch(err) {
            if(err.code == 'EEXIST') {
                console.log('The directory named testFolder exists')
            } else {
                console.log(err)
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const project = { ...this.state }
        // check data
        if(project.nom) {
            if(project.description) {
                if(project.categories) {
                    if(categoriesList.includes(project.categories)) {
                        if(this.refs.isPattern.checked){
                            this.setState({ pattern: true })
                            // this.createPatternFolderProject()
                        } else {
                            this.setState({ pattern: false })
                        }
                        this.props.addProject(project)
                        // Reset form
                        Object.keys(project).forEach(item => {
                            project[item] = ''
                        })
                        this.refs.isPattern.checked = false
                        this.setState({ ...project })    
                    } else {
                        alert('La catégorie renseignée ne fait pas partie des catégories disponibles: ' + categoriesList)
                    }
                } else {
                    alert('Indiquez une catégorie de project parmis: ' + categoriesList)
                }
            } else {
                alert('Donnez une description, même courte à votre nouveau projet!')
            }
        } else {
            alert('Donnez un nom à votre projet!')
        }
    }

    render() {
        return (
            <div className="card">
                <form 
                    className="admin-form ajouter-recette" 
                    onSubmit={ this.handleSubmit }
                >
                    <input 
                        onChange={ this.handleChange } 
                        value={ this.state.nom } 
                        name="nom" 
                        type="text" 
                        placeholder="ProjectName*"
                    />
                    <input 
                        onChange={ this.handleChange }
                        value={ this.state.categories }
                        name="categories"
                        type="text"
                        placeholder="Category*"
                    />
                    <input 
                        onChange={ this.handleChange }
                        value= { this.state.command }
                        name="command"
                        type="text"
                        placeholder="Batch Command"
                    />
                    <textarea 
                        onChange={ this.handleChange } 
                        value={ this.state.description } 
                        name="description" 
                        rows="10" 
                        placeholder="Description*"
                    />
                    <textarea 
                        onChange={ this.handleChange } 
                        value={ this.state.notes } 
                        name="notes" 
                        rows="10" 
                        placeholder="Notes" 
                    />
                    <div className="rows">
                        <div style={{marginLeft: '5px'}}>
                            <label style={{color: 'gray'}} className="row">
                                Create pattern folder ?
                            </label>
                            &nbsp;&nbsp;
                            <input 
                                className="row"
                                type="checkbox"
                                name="isPattern"
                                id="isPattern"
                                ref="isPattern"
                            />
                        </div>
                    </div>
                    <button type="submit">+ Add project</button>
                </form>
            </div>
        )
    }
}

export default AddProject