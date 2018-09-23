import React from "react";

const StoreItems = (props)=>
{
    return(
        <div
        className="card-group p-2 " 
        style={{ width: "11rem" }}
        >
            <div className="card">
                <img 
                className="img-responsive" 
                src={props.image}
                width = "70"
                height = "140"
                />
            </div>
            <div className="card-body p-2">
                <h5 className="card-title">
                    <small>{props.title}</small>
                </h5>
                <p className="card-text">
                    <small>{props.author}</small>
                </p>
            </div>
            <div className="card-footer p-2 bg-white border-0 ">
                <div className="text-right">
                    <span>
                        <strong>kr. {props.price}</strong>
                    </span>
                </div>
            </div>
            <div className="card-footer p-2">
                <div className="text-right">
                    <button
                        className="btn btn-primary btn-sm btn-block"
                        onClick={function(e) 
                        {
                            props.buyItem(props.id);
                        }}
                    >
                        Add to Basket
                    </button>
                </div>
            </div>
        </div>
    );
}
export default StoreItems;