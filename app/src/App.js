import React, { Component } from 'react';
import axios from 'axios';


import ProjectList from '../components/ProjectList';
import ActionList from '../components/ActionList';

import './App.css';


const url = 'http://localhost:8000';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    }
  }

  getProjects() {
    axios
      .get(`${url}/projects`)
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.projects);
  }

  getActions() {
    axios
      .get(`${url}/actions`)
      .then(res => this.setState({ actions: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.actions);
  }

  componentDidMount() {
    this.getProjects();
    this.getActions();
  }

  render() {
    return (
      <div className="App">
        <ProjectList projects={this.state.projects} />
        <ActionList actions={this.state.actions} />
      </div>
    );
  }
}

export default App;