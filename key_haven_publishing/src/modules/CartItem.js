import React from "react";

export const CartItem = (props)=>
{
    return(
        <div className = "card">
            <div className = "card-body align-items-stretch">
                <h5 className="card-title">{props.item.title} &times; {props.item.quantity}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.item.edition} Edition</h6>
                <p className="card-text">{props.item.author}</p>
                <div className="text-right border-top">
                    <strong>kr. {(props.item.price * props.item.quantity).toFixed(2)}</strong>
                </div>
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