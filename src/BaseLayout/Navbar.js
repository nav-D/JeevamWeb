import React, {Component } from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Container} from "reactstrap";
import "./NavbarStyle.css";

class Navbaar extends Component {
    render(){
        return(
            <div>
            <Navbar className="bar" expand="md">
                    <NavbarBrand href="/" >
                        <img  src="/assets/navicon.svg"/>
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">Our Approach</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Outcomes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Blogs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Plans</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><Button style={{backgroundColor:"#06B58C", marginTop:"-11px", width:"108px", height:"48px"}}>Join Now</Button></NavLink>
                        </NavItem>     
                    </Nav>
            </Navbar>
            </div>
        );
    }
};

export default Navbaar;