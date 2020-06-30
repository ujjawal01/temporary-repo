import React, { Component } from "react";
import { Button } from "reactstrap";

//import styles from './styles.module.css';

class InitiativesCorner extends Component{
    render(){

        const widgetCardCircle={
            fontSize: '30px',
            left: '0',
            lineHeight: "50px",
            right: "0",
            textAlign: "center",
            display:"inline",
            margin:"20px",
        };

        const cardTitle = {
            fontWeight: "400",
            fontSize: "18px",
            margin: "0",
            fontFamily: 'Roboto',
            background: 'transparent',
            color: "#252525"
        };

        const initiative={
           display:"grid",
           grid: "60px / auto auto",
           gridGap: "20px",
           padding: "10px",
           height:"50px",
           width:"60px"

        }

       
        const initiatives = this.props.initiatives;

        return (
            <div style={widgetCardCircle } >
                                    
                <h3 className="ml-4">Your Initiatives</h3>
                {!initiatives || initiatives.length <= 0 ? (
                    <div className={cardTitle} >
                        <b>No Initiatives Till Now. </b>
                    </div>):(
                        initiatives.map(initiative => (
                            <div >
                                <br />
                                <Button type="button" style={initiative} >{initiative.acronym}<br/>{initiative.full_name}</Button>
                            </div>
                        ))
                    )}
            </div>
        )
    }
}


export default InitiativesCorner;