import React from "react";

const ListDisplayChildren = props => 
{
    return <div className = {props.class_name}>{props.children}</div>;
}
export default ListDisplayChildren;