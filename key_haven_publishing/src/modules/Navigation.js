import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home} from "../Content/Home";
import {Books} from "../Content/Books";
import {Reviews} from "../Content/Reviews";

export const Navigation = ()=>
{
    return(
        <Switch>
            <Route exact path ="/" component ={Home}/>
            <Route path ="/books" component ={Books}/>
            <Route path ="/reviews" component ={Reviews}/>
            <Route component = {Home} />
        </Switch>
    );
}
