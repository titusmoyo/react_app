import React, { Component } from 'react';
import './Projects.css';


class Projects extends React.Component{

  state={
    message:'',
    Index:4,
    course:0
  }

  componentDidMount(){
    //componentDidMount
  }

  render(){
    //const { courses,modules,selectedId } = this.props;
    //console.log("ModuleList >> "+selectedId);
    return(
      <React.Fragment>
        <div>
            <p>Projects</p>
        </div>
      </React.Fragment>
    )
  }

};

export default Projects;
