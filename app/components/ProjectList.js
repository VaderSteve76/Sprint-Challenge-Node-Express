import React from 'react';


function ProjectList(props) {
  return (
    <div className='project-list'>
      <h1>Projects</h1>
      {props.projects.map(project => (
        <div className='project'>
          <p className='project-id'>Project id: {project.id}</p>
          <p className='project-name'>Project name: {project.name}</p>
          <p className='project-description'>Project description: {project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;