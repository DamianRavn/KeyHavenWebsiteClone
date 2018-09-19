import React, { Component } from 'react';
import {NavigationItem} from "./NavigationItem";
import SearchForm from "./SearchForm";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';


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

    onClick()
    {
        this.setState(
        {
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            
                <Navbar className="bg-primary" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = {this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                        {/*all the items in the navbar. Add to state to add more*/}
                            {this.props.NavList.map(item =>
                            {
                                return (
                                    <NavigationItem
                                    key = {item.link}
                                    name = {item.name}
                                    link = {item.link}
                                    />
                                );
                            })}

                            <NavItem>
                                <SearchForm/>
                            </NavItem>

                        </NavbarNav>
                    </Collapse>
                </Navbar>
                        
        );
    }
}

export default NavigationBar;