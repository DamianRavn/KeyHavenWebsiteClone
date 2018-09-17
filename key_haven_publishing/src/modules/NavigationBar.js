import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavigationBar extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar className="bg-primary" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">books</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">reviews</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">conferences</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">about</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">keep up to date</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavigationBar;