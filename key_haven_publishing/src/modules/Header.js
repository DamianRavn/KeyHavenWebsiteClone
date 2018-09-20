import React from "react"
import Logo from "../Images/Logo.PNG";
import HeaderNavigation from "./HeaderNavigation";
import NavigationBar from "./NavigationBar";

export const Header = (props)=>
{
    return(
        <div>
            <a 
            href="http://www.khpplc.co.uk/" 
            title="Key Haven Publications Ltd."
            >
            <img 
            src = {Logo}
            width = "207"
            height = "90"
            
            />
            </a>
            <div>
                <HeaderNavigation 
                NavHeaderList = {props.NavHeaderList}
                />
            </div>

            <NavigationBar
            NavList = {props.NavBarList}
            />
            
        </div>

        
    )
}