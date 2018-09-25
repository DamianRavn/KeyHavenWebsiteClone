import React from "react";
import { Link } from 'react-router-dom';

const HeaderNavigation = (props)=>
{
    return(
        <div className = "float-right">
            {props.NavHeaderList.map(navItem =>
                {
                    return(
                        <Link 
                        key = {navItem.link}
                        to={navItem.link}
                        className = "btn btn-primary"
                        type = "button"
                        >
                        {/*<img 
                        className="img-responsive" 
                        src={navItem.icon}
                        width = "20"
                        height = "20"
                        />*/}
                        {navItem.name}
                        </Link>
                    );
                })}
        </div>
    );
    
}

export default HeaderNavigation;