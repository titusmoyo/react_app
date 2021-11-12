import React, { Component } from 'react';
import './Readings.css';
import Spinner from "./Spinner";
import elements from './elements.jpg';
import system from './system.jpg';

class Readings extends React.Component{

  state={
    message:'',
    Index:0,
    course:0,
    litto:this.props.clickedModule['cs10010'],
    counter:0,
  }

  componentDidMount(){
    //componentDidMount
  }

  showImage(img){
    const { counter }=this.state;

    console.log("funny :: "+img);

    if(img==="The elements of computing systems"){
      return(
        <div>
            <img src={elements} className="rounded" style={{width:250,height:236}} />
        </div>
      );
    }

    if(img!="The elements of computing systems"){
      return(
        <div>
            <img src={system} className="rounded" style={{width:250,height:236}} />
        </div>
      );
    }


  }

  printCourses=reading=>{
    const listItems = reading.map((d) =>

      <div key={d.textbook_name} onClick={ ()=>{}} style={{marginBottom:30}}>
          <h3>{d.textbook_name}</h3>
          <div class="row">

              <div class="col-sm-3">
                   {this.showImage(d.textbook_name)}
              </div>

              {/**//**/}
              <div class="col-sm-9">
                  <div style={{fontSize:18,marginTop:10}}>
                      <p>author : {d.authors}</p>
                      <p>title : {d.textbook_name}</p>
                      <p>{d.textbook_description}</p>
                      <button type="button" className="btn btn-primary"><a href={d.textbook_link} style={{color:'black'}}>Download Book</a></button>
                  </div>
              </div>
              {/**//**/}

          </div>
      </div>
    );

    return (
      <div>
          {listItems }
      </div>
    );

  }

  render(){
    const { courses,modules,selectedId,clickedModule } = this.props;
    let shit=clickedModule['cs10010'];
    //console.log("ModuleList >> "+selectedId);
    if(clickedModule.length!=0){
      console.log("Course_home________**** : " +clickedModule[0].course_summery);
      return(
        <React.Fragment>
          <div className="#nothing">
              {/**/}
              {this.printCourses(clickedModule[0].readings)}
              {/**/}
          </div>
        </React.Fragment>
      )//end of return statement
    }//end of if statement
    else {
      return(
        <Spinner/>
      );
    }

  }

};

export default Readings;
