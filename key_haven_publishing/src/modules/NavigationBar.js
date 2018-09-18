import React, { Component } from 'react';
import {NavigationItem} from "./NavigationItem";
import NavigationList from "./NavigationList";
import SearchForm from "./SearchForm";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
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
            NavList: ["Home", "books", "reviews", "conferences", "about", "keep up to date"]
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
                            <NavigationList>
                                {this.state.NavList.map(item =>
                                {
                                    return (
                                        <NavigationItem
                                        link = {item}
                                        />
                                    );
                                })}

                                <NavItem>
                                    <SearchForm/>
                                </NavItem>
                            </NavigationList>
                        </NavbarNav>

                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavigationBar;