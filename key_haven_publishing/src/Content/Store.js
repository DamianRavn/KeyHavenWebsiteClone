import React from "react";
import StoreItems from "../modules/StoreItems";
import ListDisplayChildren from "../modules/ListDisplayChildren";

const Store = (props)=>
{
    return (
        <div className="border mt-3 p-2">
            <ListDisplayChildren 
            class_name = "d-flex flex-wrap"
            >
                {props.bookItems.map(bookItem => 
                {
                    return (
                        <StoreItems 
                        key = {bookItem.isbn}
                        BookObject = {bookItem}
                        AddToBasket = {props.functions.AddToBasket}
                        />
                    );
                })}
            </ListDisplayChildren>
        </div>
    );
}
export default Store;