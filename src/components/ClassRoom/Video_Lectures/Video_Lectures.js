import React, { Component } from 'react';
import './Video_Lectures.css';


class VideoLectures extends React.Component{

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
        <iframe width="700" height="315" src="https://www.youtube.com/embed/LqirVc5SlW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/RG4IXfTMGSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/t7XYsKogTME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/ge2jPjocaxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/xUFpmKa7f7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/Noi-lpSSEcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/B69XKPdwDMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/TSGrkNj_OqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/rg0FIjUf2OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/q0mQ-A1WXmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/7I9bGG9_BEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="700" height="315" src="https://www.youtube.com/embed/OZlvyGaRmQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
      </React.Fragment>
    )
  }

};

export default VideoLectures;
