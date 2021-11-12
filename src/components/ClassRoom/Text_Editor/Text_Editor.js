import React, { Component } from 'react';
import './Text_Editor.css';


class TextEditor extends React.Component{

  state={
    message : '',
    Index : 5,
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
            <p>Text_Editor</p>
        </div>
      </React.Fragment>
    )
  }

};

export default TextEditor;
