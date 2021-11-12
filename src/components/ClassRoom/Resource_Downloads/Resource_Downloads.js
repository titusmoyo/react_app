import React, { Component } from 'react';
import './Resource_Downloads.css';


class Resources extends React.Component{

  state={
    message : '',
    Index : 6,
    course : 0
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
            <p>Download Resources******</p>
        </div>
      </React.Fragment>
    )
  }

};

export default Resources;
