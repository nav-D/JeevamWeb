import React, {Component } from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Button} from "reactstrap";

class Navbaar extends Component {
    render(){
        return(
            <div>
                <Navbar className="bar" expand="md" fixed="top">
                    <NavbarBrand href="/" >
                        <img  src="/assets/navicon.svg" alt="logo"/>
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
                            <NavLink href="#"><Button className="btn btn-secondary nav-join-btn">Join Now</Button></NavLink>
                        </NavItem>     
                    </Nav>
                </Navbar>
            </div>
        );
    }
};

export default Navbaar;