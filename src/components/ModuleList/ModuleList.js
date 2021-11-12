import React, { Component } from 'react';
import logo from '../../icons/logo.svg';
import limo from '../../icons/limo.svg';
import './ModuleList.css';

//Data imports here
import cs_list from '../ClassRoom/Data/cs_list';


class ModuleList extends React.Component{

  state={
    message:'',
    currentIndex:1,
    currentProgram:this.props.currentProgram,
    course:0,
    cs_list:cs_list,
    toindex:2,
    tg:null,
  }

  componentDidMount(){
    //componentDidMount
  }

  printCourseView(val){
    const { currentIndex,toindex } = this.state;
    //console.log("yelp");
    //console.log("d >> "+courses.length);
    const listItems = cs_list[val].map((d) =>
      <tbody onMouseOut={this.onToggleClose} onMouseOver={this.onToggleOpen} key={d.course_code} onClick={ ()=>{this.props.handleCourseSelection(toindex,d.course_code) }}>
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

  handleSelection(index,label){
    console.log("hiro >> "+label);
    this.setState({
      currentIndex:index,
      currentLable:label
    })
  }

  render(){

    const { courses,modules,selectedId } = this.props;
    const {currentProgram} = this.state;
    console.log("ModuleList >> "+selectedId);


    return(
      <React.Fragment>
        <div className="container" className="container" style={{marginTop:5}}>
            <div className="row">
              <div className="col-sm-3"></div>

              <div className="col-sm-1">
                <img src={logo} className="App-logo" alt="logo" />
              </div>

              <div className="col-sm-7" style={{marginTop:20}} >
                  <h1 className="App-title">Open Source Institute of Technology</h1>
              </div>
            </div>

            <div>
              {/**/}
              <div>
                  <h3>{currentProgram}  (First Year)</h3>
                    {/**/this.printCourseView("firstYear")}
                  <h3>Second Year</h3>
                    {/**/this.printCourseView("secondYear")}
                  <h3>Third Year</h3>
                    {/**/this.printCourseView("thirdYear")}
              </div>
              {/**/}
            </div>
        </div>
      </React.Fragment>
    )
  }

};

export default ModuleList;
