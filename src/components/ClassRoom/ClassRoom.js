import React, { Component } from 'react';
import logo from '../../icons/logo.svg';
import limo from '../../icons/limo.svg';
import './ClassRoom.css';
//start of imports
import CourseHome from './Course_Home/Course_Home';
import Readings from './Readings/Readings';
import VideoLectures from './Video_Lectures/Video_Lectures';
import Assignments from './Assignments/Assignments';
import Projects from './Projects/Projects';
import TextEditor from './Text_Editor/Text_Editor';
import Resources from './Resource_Downloads/Resource_Downloads';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Data imports here
import cs_list from './Data/cs_list';
import cs_modules from '../ClassRoom/Data/cs_modules';

class ClassRoom extends React.Component{

  state={
    message : '',
    currentIndex : 0,
    currentLable : "Course Home",
    cs_list:cs_list,
    tg:null,
    cs_modules:cs_modules,
    clicked_Module_Code:'cs1001',
    clickedModule:''

  }

  componentDidMount(){
    //componentDidMount
    const { clicked_Module_Code } = this.state;
    this.setState({
      clickedModule:cs_modules[clicked_Module_Code]
    })
  }

  printViews=currentIndex=>{

    if(currentIndex===0){
      return(
        <div>
            <CourseHome clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if

    if(currentIndex===1){
      return(
        <div>
            <Readings clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if

    if(currentIndex===2){
      return(
        <div>
            <VideoLectures clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if

    if(currentIndex===3){
      return(
        <div>
            <Assignments clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if

    if(currentIndex===4){
      return(
        <div>
            <Projects clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if

    if(currentIndex===5){
      return(
        <div>
            <TextEditor clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if

    if(currentIndex===6){
      return(
        <div>
            <Resources clickedModule={this.state.clickedModule} />
        </div>
      );
    }//end of if


    if(currentIndex===7){
      console.log("hell "+cs_list);
      return(
        <div>
            <h3>First Year</h3>
              {/**/this.printCourseView("firstYear")}
            <h3>Second Year</h3>
              {/**/this.printCourseView("secondYear")}
            <h3>Third Year</h3>
              {/**/this.printCourseView("thirdYear")}
        </div>
      );
    }//end of if


  }//end of printViews

  printCourseView(val){
    //console.log("yelp");
    //console.log("d >> "+courses.length);
    const listItems = cs_list[val].map((d) =>
      <tbody onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen} key={d.course_code} onClick={ ()=>{this.handleModuleSelection(d.course_id,d.course_code) }}>
        <tr className="sub_size">

          <td>{d.course_name} <i className="fa fa-fw fa-plus-square add_butt"></i></td>
          <td>{d.course_duration}</td>
          <td>start module <i className="fa fa-fw fa-arrow-right add_butt"></i> </td>

        </tr>
      </tbody>
    );

    return (
      <div>
          <table class="table">
            <thead class="thead-light header_size">
              <tr>
                <th>Courses</th>
                <th>Duration</th>
                <th>Classroom</th>
                </tr>
              </thead>
              {/**/listItems}
          </table>
      </div>
    );

  }

  onToggleOpen=(e)=>{
      console.log("this is working fine");
      e.preventDefault();
      //e.target.style.color = 'black'
      e.target.style.backgroundColor='#96EFE4'
      //console.log(e.target);
  }

  onToggleClose=(e)=>{
      console.log("this is working fine");
      e.preventDefault();
      //e.target.style.color='blue'
      e.target.style.backgroundColor='white'
      //console.log('hey : '+e.target);
  }


  handleModuleSelection(course_id,course_code){
    console.log('**module selected : '+course_code);
  }

  handleSelection(index,label){
    console.log("hiro >> "+label);
    this.setState({
      currentIndex:index,
      currentLable:label
    })
  }

  onToggleOpen=(e)=>{
      console.log("this is working fine");
      e.preventDefault();
      //e.target.style.color = 'black'
      e.target.style.backgroundColor='#96EFE4'
      //console.log(e.target);
  }

  onToggleClose=(e)=>{
      console.log("this is working fine");
      e.preventDefault();
      //e.target.style.color='blue'
      e.target.style.backgroundColor='white'
      //console.log('hey : '+e.target);
  }

  render(){

    const { courses , modules } = this.props;
    const { currentIndex, currentLable,cs_modules } = this.state;

    console.log("course **shists : "+cs_modules);

    return (
    <div className="">
    <div id="cm-menu">

    <nav className="cm-navbar cm-navbar-primary">
        <div className="btn btn-primary md-menu-white" data-toggle="cm-menu"></div>
    </nav>

    <div id="cm-menu-content">
        <div id="cm-menu-items-wrapper">
            <div id="cm-menu-scroller">
                <ul className="cm-menu-items">
                    <li onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}  className="active" onClick={()=>this.handleSelection(0,"Course Home")}><a className=" sf-file-text">Course Home</a></li>
                    <li onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}  onClick={()=>this.handleSelection(1,"Readings")} ><a className="sf-book-bookmark">Readings</a></li>
                    <li onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}   onClick={()=>this.handleSelection(2,"Video Lectures")} ><a className="sf-file-video">Video Lectures</a></li>
                    <li onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}   onClick={()=>this.handleSelection(3,"Assignments")} ><a className="sf-puzzle">Assignments</a></li>
                    <li onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}   onClick={()=>this.handleSelection(4,"Projects")} ><a className="sf-terminal">Projects</a></li>
                    <li onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}   onClick={()=>this.handleSelection(5,"Text Editor")} ><a className="sf-notepad">Text Editor</a></li>
                    <li  onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen}  onClick={()=>this.handleSelection(6,"Download Course Resources")} ><a className="sf-cloud-down">Download Course Resources</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<header id="cm-header">
    <nav className="cm-navbar cm-navbar-primary">
        <div className="btn btn-primary md-menu-white hidden-md hidden-lg" data-toggle="cm-menu"></div>
        <div className="cm-flex">
            <h1>{ currentLable }</h1>

            <form id="cm-search" action="index.html" method="get" >
                <input type="search" name="q" autocomplete="off" placeholder="Search..." />
            </form>

        </div>
        <div className="pull-right">
            <div id="cm-search-btn" className="btn btn-primary md-search-white" data-toggle="cm-search"></div>
        </div>
        <div className="dropdown pull-right">
            <button className="btn btn-primary md-notifications-white" data-toggle="dropdown"> <span className="label label-danger">23</span> </button>
            <div className="popover cm-popover bottom">
                <div className="arrow"></div>
                <div className="popover-content">
                    <div className="list-group">
                        <a href="#" className="list-group-item">
                            <h4 className="list-group-item-heading text-overflow">
                                <i className="fa fa-fw fa-envelope"></i> Nunc volutpat aliquet magna.
                            </h4>
                            <p className="list-group-item-text text-overflow">Pellentesque tincidunt mollis scelerisque. Praesent vel blandit quam.</p>
                        </a>
                        <a href="#" className="list-group-item">
                            <h4 className="list-group-item-heading">
                                <i className="fa fa-fw fa-envelope"></i> Aliquam orci lectus
                            </h4>
                            <p className="list-group-item-text">Donec quis arcu non risus sagittis</p>
                        </a>
                        <a href="#" className="list-group-item">
                            <h4 className="list-group-item-heading">
                                <i className="fa fa-fw fa-warning"></i> Holy guacamole !
                            </h4>
                            <p className="list-group-item-text">Best check yo self, you're not looking too good.</p>
                        </a>
                    </div>
                    <div style={{padding:10}}><a className="btn btn-success btn-block" href="#">Show me more...</a></div>
                </div>
            </div>
        </div>
        <div className="dropdown pull-right">
            <button className="btn btn-primary md-account-circle-white" data-toggle="dropdown"></button>
            <ul className="dropdown-menu">
                <li className="disabled text-center">
                    <a style={{}}><strong>John Smith</strong></a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-fw fa-cog"></i> Settings</a>
                </li>
                <li>
                    <a href="login.html"><i className="fa fa-fw fa-sign-out"></i> Sign out</a>
                </li>
            </ul>
        </div>
    </nav>
</header>

    <div id="global" className="" style={{marginLeft:300,marginTop:40}}>
        <div className="container-fluid cm-container-white">
            <h2 style={{}}> </h2>
        </div>

        <div className="">
            {
              /**/
              this.printViews(currentIndex)
              /**/
            }
        </div>

    <footer className="cm-footer"><span className="pull-left">Connected as Guest</span><span className="pull-right">&copy; OSIT</span></footer>
  </div>

</div>
  );

  }

};

export default ClassRoom;
