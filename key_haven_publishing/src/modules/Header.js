import React from "react"
import Logo from "../Images/Logo.PNG";
import HeaderNavigation from "./HeaderNavigation";
import NavigationBar from "./NavigationBar";
import { Link } from 'react-router-dom';

export const Header = (props)=>
{
    return(
        <div>
            <Link 
            to="/" 
            title="Key Haven Publications Ltd."
            >
            <img 
            src = {Logo}
            width = "207"
            height = "90"
            
            />
            </Link>

            <HeaderNavigation 
            NavHeaderList = {props.NavHeaderList}
            />

            <NavigationBar
            NavBarList = {props.NavBarList}
            />
            
        </div>

        
    )
}