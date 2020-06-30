import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectModal from "./ProjectModal";
import ConfirmProjectRemoval from "./ConfirmProjectRemovalModal";

import "../css/styles.css";

class TimelineItem extends Component {
    render () {
        const project = this.props.project;
        return (
           
                <div className="timeline-item">
            
                        <div className="timeline-item-content">
               
                            <time>{project.date}</time>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <p>{project.technology}</p>
                       
                            <ProjectModal  create = {false} 
                            resetState = {this.props.resetState}
                            project = {project}/>  
                    
                            <ConfirmProjectRemoval  id={project.id} 
                                resetState = {this.props.resetState}/>
                               
                        <span className="circle" />
                    </div>
                </div>     
               
        )
    }    
}

class Timeline extends Component {

    render () {
        const projects = [
            {
                name: "Project 1",
                description:"My first project",
                technology: "C++",
                date: "20 May 2020",
            },

            {
                name: "Project 2",
                description:"My first project",
                technology: "Java",
                date: "30 Jan 2019",
            },
        ]
        return (
            <div>
                <b>Projects</b>
                {!projects || projects.length <= 0 ? (
                    <div>
                        <b>No Projects Yet. </b>
                    </div>
                ) : (
                    <div >
                        <div className="timeline-container">
                            {projects.map((project, idx) => (
                                <TimelineItem project={project} key={idx} />
                            ))}
                        </div>
                        <ProjectModal create={true} resetState ={this.props.resetState}/>
                    </div>
                ) }
            </div>
        );
    }    
}

export default Timeline;