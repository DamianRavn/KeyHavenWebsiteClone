import React from "react";

const ListDisplayChildren = props => 
{
    return <div className = {props.class}>{props.children}</div>;
}
export default ListDisplayChildren;