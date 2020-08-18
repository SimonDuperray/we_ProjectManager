import React, { Component } from 'react';

import AddProject from './AddProject'
import AdminForm from './AdminForm'

class Admin extends Component {
    render() {
        const { projects, addProject, loadExample, updateProject, deleteProject } = this.props
        return (
            <div className="cards">
                <AddProject addProject={addProject} />
                {
                    Object.keys(projects)
                        .map(key => 
                            <AdminForm
                                key={key}
                                id={key}
                                updateProject={updateProject}
                                deleteProject={deleteProject}
                                projects={projects}
                            />
                        )
                }
                <footer>
                    <h1>© Simon Duperray</h1>
                </footer>
            </div>
        )
    }
}

export default Admin