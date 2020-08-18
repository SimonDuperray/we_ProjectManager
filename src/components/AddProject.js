import React, { Component } from 'react'

class AddProject extends Component {
    state = {
        nom: '',
        description: '',
        notes: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const project = { ...this.state }
        this.props.addProject(project)
        // Reset form
        Object.keys(project).forEach(item => {
            project[item] = ''
        })
        this.setState({ ...project })
    }

    render() {
        return (
            <div>
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
                            placeholder="Notes (separator: .)" 
                        />
                        <button type="submit">+ Add project</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProject