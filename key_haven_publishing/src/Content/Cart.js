import React from "react";
import {CartItem} from "../modules/CartItem";
import ListDisplayChildren from "../modules/ListDisplayChildren";

const consolidateList = items => 
{
    const list = {};
    items.map(item => 
    {
        if (list[item.isbn]) 
        {
            list[item.isbn].quantity++;
        } else 
        {
            list[item.isbn] = item;
            list[item.isbn].quantity = 1;
        }
    });
    return Object.values(list);
};

const getTotal = items => 
{
    const total = items.reduce((tot, item) => 
    {
        return tot + parseFloat(item.price) * item.quantity;
    }, 0);
    return total;
};

const Cart = (props)=>
{
    const cartList = consolidateList([...props.lists.CartList]);
    const total = getTotal(cartList);
    return(
        <div className="border mt-3 p-2">
        <h5>Shopping Basket</h5>
            <ListDisplayChildren 
            class_name = "flex-wrap"
            >
                {cartList.map((item, index )=> 
                {
                    return (
                    <CartItem
                    key = {index}
                    item = {item}
                    RemoveFromBasket = {props.functions.RemoveFromBasket}
                    RemoveSingleItemFromBasket = {props.functions.RemoveSingleItemFromBasket}
                    />
                    );
                })}
                <div className="text-right border-top">
                    <strong>Total: kr. {total.toFixed(2)}</strong>
                </div>
            </ListDisplayChildren>
        </div>
        
        
    );
    
}
export default Cart;