import React, { Component } from 'react';
import './Course_Home.css';
import Spinner from "./Spinner";

class CourseHome extends React.Component{

  state={
    message:'',
    Index:0,
    course:0,
  }

  componentDidMount(){
    //componentDidMount
  }

  render(){
    const { courses,modules,selectedId,clickedModule } = this.props;
    //console.log("ModuleList >> "+selectedId);
    console.log("Course_home________**** : " +clickedModule.length);

    if(clickedModule.length!=0){
      console.log("Course_home________**** : " +clickedModule[0].course_summery);
      return(
        <React.Fragment>
          <div className="#nothing">
                {/**//*the revelation*/}
                <h2>{clickedModule[0].course_name}</h2>
                <div class="">

                    <div class="row">

                        <div class="col-sm-6">
                             <img src={require('./coding.jpg')} className="rounded" style={{width:500,height:236}} />
                        </div>

                        {/**//**/}
                        <div class="col-sm-6">
                            <div style={{fontSize:18,marginTop:10}}>
                                <h4>Level : Undergraduate</h4>
                                <h4>Duration : {clickedModule[0].course_duration}</h4>
                                <h4>Course code : {clickedModule[0].course_code}</h4>
                            </div>
                        </div>
                        {/**//**/}

                    </div>

                    <h2>Course Description</h2>
                    <div className="card" style={{fontSize:18}} >
                        <div className="card-body">{clickedModule[0].course_summery}</div>
                    </div>
                </div>
                {/**//**/}
                <div className="" style={{ marginTop:15 }}>
                   <h4>Related Modules</h4>
                   <div style={{ color:"blue", }}>
                      <p>Computer Systems 1</p>
                      <p>Communications and Networking</p>
                      <p>Advanced Networking and Data Security</p>
                   </div>
                </div>
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

export default CourseHome;
