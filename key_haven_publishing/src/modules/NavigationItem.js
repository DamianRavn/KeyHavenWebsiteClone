import React from "react";
import { NavItem, NavLink } from 'mdbreact';

export const NavigationItem = (props)=>
{
    return (
    <NavItem active>
       <NavLink to="#">{props.link}</NavLink>
    </NavItem>
    );
}