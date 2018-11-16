import React from 'react';


function ActionList(props) {
  return (
    <div className='action-list'>
      <h1>Actions</h1>
      {props.actions.map(action => (
        <div className='action'>
          <p className='action-id'>Action id: {action.id}</p>
          <p className='project-id'>Project id: {action.project_id}</p>
          <p className='action-description'>Action description: {action.description}</p>
          <p className='action-notes'>Action notes: {action.notes}</p>

        </div>
      ))}
    </div>
  );
}

export default ActionList;