import React from "react";
import ListDisplayChildren from "../modules/ListDisplayChildren";

const Cart = (props)=>
{
    return(
        <div className="border mt-3 p-2">
            <ListDisplayChildren 
            class = "d-flex flex-wrap"
            >
                {props.CartList.map(item => 
                {
                    return (
                    <div className = "card" key = {item.isbn}>
                        <div className = "card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{item.edition}</h6>
                            <p class="card-text">{item.author}</p>
                            <button>Remove from basket</button>
                        </div>
                    </div>
                    );
                })}
            </ListDisplayChildren>
        </div>
        
        
    );
    
}
export default Cart;