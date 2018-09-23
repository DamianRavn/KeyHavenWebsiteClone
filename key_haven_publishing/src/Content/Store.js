import React from "react";
import StoreItems from "../modules/StoreItems";
import ListDisplayChildren from "../modules/ListDisplayChildren";

const Store = (props)=>
{
    return (
        <div className="border mt-3 p-2">
            <ListDisplayChildren 
            class = "d-flex flex-wrap"
            >
                {props.items.map(item => 
                {
                    return (
                        <StoreItems 
                        id = {item.id}
                        image = {item.image}
                        title = {item.title}
                        edition = {item.edition}
                        author = {item.author}
                        price = {item.price}
                        addToBasket = {props.addToBasket}
                        />
                    );
                })}
            </ListDisplayChildren>
        </div>
    );
}
export default Store;