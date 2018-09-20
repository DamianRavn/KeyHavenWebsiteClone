import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Navigation = (props)=>
{
    return(
        <Switch>
            {props.NavBarList.map(page =>
            {
                return(
                    <Route 
                    exact path ={page.link} 
                    component ={page.content}
                    key = {page.link}
                    />
                );
            })}
        </Switch>
            
    );
}
