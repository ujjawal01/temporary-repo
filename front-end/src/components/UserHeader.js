import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import EYantraHeader from "./EYantraHeader";

import User from "../images/user.png";
import "../css/styles.css";

class UserHeader extends Component{
    render() {
        return(
        
        <Navbar fluid collapseOnSelect bg="dark" variant="dark">
            <Navbar.Brand ><EYantraHeader /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
               
                </Nav>
            
                <Navbar.Brand href="/profile">
                 
                    <Image src={User} roundedCircle/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        Log Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default UserHeader;

{/* <header>
<div className="user-header">
<Link to="/">
    <h6>
        Home
    </h6>
</Link>

<Link to="/profile">
     <h6>
        user's profile picture will go here
    </h6>
</Link>

<h6>
    Log out
</h6>

</div>
</header> */}
