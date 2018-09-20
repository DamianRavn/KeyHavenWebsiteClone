import React from "react";
import { Link } from 'react-router-dom';

class HeaderNavigation extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {

        }
    }

    render()
    {
        return(
            <div>
                Cart,WishList,login,contact
            </div>
        );
    }
}

export default HeaderNavigation;