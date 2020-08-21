import React, { Component } from 'react';

import AddProject from './AddProject'
import AdminForm from './AdminForm'
import HelpMarkdown from './HelpMarkdown'

class Admin extends Component {
    render() {
        const { projects, addProject, updateProject, deleteProject } = this.props
        return (
            <div>
                <div className="card">
                    <HelpMarkdown />
                </div>
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
                </div>
            </div>
        )
    }
}

export default Admin