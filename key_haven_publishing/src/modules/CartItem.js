import React from "react";

export const CartItem = (props)=>
{
    return(
        <div className = "card">
            <div className = "card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.item.edition}</h6>
                <p className="card-text">{props.item.author}</p>
                <button 
                onClick = {()=>{props.RemoveFromBasket(props.item.isbn)}}
                >Remove from basket</button>
                <button 
                onClick = {()=>{props.RemoveSingleItemFromBasket(props.item.isbn)}}
                >Remove single item</button>
            </div>
        </div>
    )
}