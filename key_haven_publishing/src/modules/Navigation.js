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
                    /*render allows attributes to be given to the content*/
                    render = {() => <page.content
                    CartList = {props.CartList}
                    AddToBasket = {props.AddToBasket}
                    RemoveFromBasket = {props.RemoveFromBasket}
                    RemoveSingleItemFromBasket = {props.RemoveSingleItemFromBasket}
                    />}
                    />
                );
            })}
        </Switch>
            
    );
}
