import React from "react";
import {CartItem} from "../modules/CartItem";
import ListDisplayChildren from "../modules/ListDisplayChildren";

const Cart = (props)=>
{
    return(
        <div className="border mt-3 p-2">
            <ListDisplayChildren 
            class_name = "d-flex flex-wrap"
            >
                {props.CartList.map((item, index )=> 
                {
                    return (
                    <CartItem
                    key = {index}
                    item = {item}
                    RemoveFromBasket = {props.RemoveFromBasket}
                    RemoveSingleItemFromBasket = {props.RemoveSingleItemFromBasket}
                    />
                    );
                })}
            </ListDisplayChildren>
        </div>
        
        
    );
    
}
export default Cart;