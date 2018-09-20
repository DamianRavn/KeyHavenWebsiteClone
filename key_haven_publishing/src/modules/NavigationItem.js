import React from "react";
import { NavItem, NavLink } from 'mdbreact';

export const NavigationItem = (props)=>
{
    return (
    <NavItem>
       <NavLink
       exact
       to={props.link}>{props.name}</NavLink>
    </NavItem>
    );
}