import React, { Component } from 'react';
import logo from '../../icons/logo.svg';
import limo from '../../icons/limo.svg';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Home extends React.Component{
  state={
    channel : this.props.currentChannel,
    user:this.props.currentUser,
    messages:[],
    messagesLoading:true,
    currentIndex:0,
    toindex:1,
  }

  componentDidMount(){
    //componentDidMount
  }

  handleCourseClick(a,b){
    console.log("hallo hey"+a);
  }

  printCourses=courses=>{
    console.log("yelp");
    console.log("d >> "+courses.length);

    const data =[{"name":"test1"},{"name":"test23"},{"name":"test14"},{"name":"test25"}];

    const listItems = courses.map((d) =>
      <div key={d.course_id} onClick={ ()=>{this.props.handleCourseSelection(this.state.currentIndex,d.course_id) }} >
          <p>{d.course_name}</p>
      </div>
    );

    return (
      <div>
          {listItems }
      </div>
    );

  }

  onToggleOpen=(e)=>{
      console.log("this is working fine");
      e.preventDefault();
      //e.target.style.color = 'black'
      e.target.style.backgroundColor='white'
      //console.log(e.target);
  }


  render(){

    const { messagesRef,channel,user,messages,currentIndex,toindex } = this.state ;
    const { courses,modules,handleCourseSelection } = this.props;
    
    return(
      <React.Fragment>
      <div className="container" style={{marginTop:5}}>
          <div className="row">
            <div className="col-sm-3"></div>

            <div className="col-sm-1">
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="col-sm-7" style={{marginTop:25}} >
                <h1 className="App-title">Open Source Institute of Technology</h1>
            </div>
          </div>

          <div className="" style={{marginTop:5}}>
            {/**/}
            <div className="desc_style" style={{}}>

              <p>
              The OSIT curriculums offer complete education in undergraduate programs using online materials.
              It's not merely for career training or professional development.
              It's for those who want a proper, well-rounded grounding in concepts fundamental courses,
              and for those who have the discipline, will, and (most importantly!) good habits to obtain this education largely on their own,
              but with support from a worldwide community of fellow learners.
              </p>

              <p>
              It is designed according to the degree requirements of undergraduate majors. The courses themselves are among the very best in the world,
              often coming from Harvard, Princeton, MIT, etc., but specifically OSIT is open source and anyone can contribute.
              </p>

              <p>Courses are:</p>
              <ul>
                <li>open for enrollment</li>
                <li>high quality in teaching materials and pedagogical principles</li>
              </ul>

              {/*Start of scards */}
              <div onClick={ ()=>{this.props.handleCourseSelection(toindex,"cs_01") }}
                   onMouseOut={e=>{e.preventDefault();e.target.style.backgroundColor='#96EFE4';}}
                   onMouseOver={this.onToggleOpen}
                   className="card" style={{marginTop:20,backgroundColor:'#B983FF'}}>

                  <div className="card-body">Computer Science</div>
              </div>

              <div onClick={ ()=>{this.props.handleCourseSelection(toindex,"math_01") }}
                   onMouseOut={e=>{e.preventDefault();e.target.style.backgroundColor='#E6DDC4';}}
                   onMouseOver={this.onToggleOpen}
                   className="card" style={{marginTop:20,backgroundColor:'#E6DDC4'}}>

                  <div className="card-body">Mathematics</div>
              </div>

              <div onClick={ ()=>{this.props.handleCourseSelection(toindex,"bs_01") }}
                   onMouseOut={e=>{e.preventDefault();e.target.style.backgroundColor='#FBF46D';}}
                   onMouseOver={this.onToggleOpen}
                   className="card"  style={{marginTop:20,backgroundColor:'#FBF46D'}}>
                  <div class="card-body">Business Studies</div>
              </div>

              <div onClick={ ()=>{this.props.handleCourseSelection(toindex,"hs_01") }}
                   onMouseOut={e=>{e.preventDefault();e.target.style.backgroundColor='#49FF00';}}
                   onMouseOver={this.onToggleOpen}
                   className="card"  style={{marginTop:20,backgroundColor:'#49FF00'}}>
                  <div className="card-body">Health Science</div>
              </div>
              {/*End of Cards*/}

            </div>
            {/**/}
          </div>
      </div>
      </React.Fragment>
    )
  }

};

export default Home;
