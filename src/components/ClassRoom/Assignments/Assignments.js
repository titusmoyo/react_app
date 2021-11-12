import React, { Component } from 'react';
import './Assignments.css';


class Assignments extends React.Component{

  state={
    message:'',
    Index:0,
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
            <p>Assignments</p>
        </div>
      </React.Fragment>
    )
  }

};

export default Assignments;
