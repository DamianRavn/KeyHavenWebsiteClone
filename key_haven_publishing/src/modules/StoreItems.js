import React from "react";

const StoreItems = (props)=>
{
    return(
        <div
        className="card-group p-2 " 
        style={{ width: "11rem" }}
        >
            <img 
                className="img-responsive" 
                src={props.BookObject.image}
                width = "80"
                height = "110"
                />
            <div className="card-body p-2">
                <h5 className="card-title">
                    <small><strong>{props.BookObject.title}</strong></small>
                </h5>
                <p className="card-text">
                    <small>{props.BookObject.edition} Edition</small>
                </p>
                <p className="card-text">
                    <small>{props.BookObject.author}</small>
                </p>
            </div>
            <div className="card-footer p-2 bg-white border-0 ">
                <div className="text-right">
                    <span>
                        <strong>kr. {props.BookObject.price}</strong>
                    </span>
                </div>
            </div>
            <div className="card-footer p-2">
                <div className="text-right">
                    <button
                        className="btn btn-primary btn-sm btn-block"
                        onClick = {()=>{props.AddToBasket(props.BookObject)}}
                        
                    >
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    );
}
export default StoreItems;