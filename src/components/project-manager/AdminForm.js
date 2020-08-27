import React from 'react'

import categorieslist from '../categorieslist'

const AdminForm = ({
    id: key,
    updateProject,
    projects,
    deleteProject
}) => {
    const project = projects[key]
    const handleChange = (event, key) => {
        const { name, value } = event.target
        const project = projects[key]
        project[name] = value
        updateProject(key, project)
    }
    return (
        <div className="card">
            <form className="admin-form">
                <input 
                    onChange={event => handleChange(event, key)}
                    value={project.nom}
                    name="nom" 
                    type="text" 
                    placeholder="ProjectName" 
                />
                <input 
                    onChange={ event => handleChange(event, key) }
                    value={ project.categories }
                    name="categories"
                    type="text"
                    placeholder="Categories"
                />
                <input 
                    onChange={event => handleChange(event, key) }
                    value= { project.command }
                    name="command"
                    type="text"
                    placeholder="Batch Command"
                />
                <textarea 
                    onChange={e => handleChange(e, key)}
                    value={project.description}
                    name="description" 
                    rows="10" 
                    placeholder="Description"
                />
                <textarea 
                    onChange={event => handleChange(event, key)}
                    value={project.notes}
                    name="notes" 
                    rows="10" 
                    placeholder="Notes" 
                />
            </form>
            <button onClick={() => deleteProject(key)}>Delete</button>
        </div>
    )
}

export default AdminForm