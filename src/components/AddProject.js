import React, { Component } from 'react'

class AddProject extends Component {
    state = {
        nom: '',
        description: '',
        notes: '',
        command: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const project = { ...this.state }
        if(project.nom) {
            if(project.description) {
                this.props.addProject(project)
                // Reset form
                Object.keys(project).forEach(item => {
                    project[item] = ''
                })
                this.setState({ ...project })
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
                        placeholder="ProjectName" 
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
                        placeholder="Description"
                    />
                    <textarea 
                        onChange={ this.handleChange } 
                        value={ this.state.notes } 
                        name="notes" 
                        rows="10" 
                        placeholder="Notes" 
                    />
                    <button type="submit">+ Add project</button>
                </form>
            </div>
        )
    }
}

export default AddProject