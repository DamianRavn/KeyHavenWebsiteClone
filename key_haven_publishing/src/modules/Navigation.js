import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Navigation = (props)=>
{
    return(
        <Switch>
            {props.NavList.map(page =>
            {
                return(
                    <Route 
                    key = {page.link}
                    exact path ={page.link} 
                    component ={page.content}
                    CartList = {props.CartList}
                    FunctionList = {props.FunctionList}
                    />
                );
            })}
        </Switch>
            
    );
}
