import React, { Component } from 'react';
import { connect } from "react-redux";
import Home from './Home/Home';
import ModuleList from './ModuleList/ModuleList';
import ClassRoom from './ClassRoom/ClassRoom';

class App extends Component {

  state={
    courses:[],
    modules:[],
    coursesLoading:true,
    modulesLoading:true,
    index:0,
    selectedId:0
  }

  componentDidMount(){
    console.log(this.props.isLoading);
    console.log("fuckkk");
  }//end of componentDidMount

  handleCourseSelection=(val,id)=>{
    console.log("handle course selectction : "+val);

    let prog="Computer Science";
    if(id==="cs_01"){
      prog="Computer Science";
    }
    if(id==="math_01"){
      prog="Mathematics";
    }
    if(id==="bs_01"){
      prog="Business Studies";
    }
    if(id==="hs_01"){
      prog="Health Science";
    }

    this.setState({
      index:val,
      selectedId:id,
      currentProgram:prog
    })
  }//end of handleCourseSelection

  render() {

    const { currentUser }=this.props;
    const { courses,modules,index,selectedId,currentProgram } = this.state;

    console.log("App. js (currentUser) :  " + currentUser);

    //*retirn the courses list here yeah*//
    if(index===0){
      return (
        <div >
          <Home courses={courses} modules={modules} handleCourseSelection={this.handleCourseSelection} />
        </div>
      );
    }

    //* return the ModulesList here*//
    if(index===1){
      return (
        <div>
          <ModuleList courses={courses}
                      modules={modules}
                      handleCourseSelection={this.handleCourseSelection}
                      selectedId={selectedId}
                      currentProgram={currentProgram}
                       />
        </div>
      );
    }

    //*return the Course Outline Here*//
    if(index===2){
      return (
        <div>
          <ClassRoom courses={courses}
                     modules={modules}
                     handleCourseSelection={this.handleCourseSelection}
                     selectedId={selectedId}
                     currentProgram={currentProgram}
                      />
        </div>
      );
    }

  }
}

const mapStateToProps=state=>({
  currentUser: state.user.currentUser,
  currentChannel:state.channel.currentChannel
})

export default connect(mapStateToProps)(App);
