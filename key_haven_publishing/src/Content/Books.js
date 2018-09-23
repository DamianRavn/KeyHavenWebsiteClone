import React from "react"
import Store from "./Store";
import Cart from "./Cart";

import DefaultImage from "../Images/DefaultImage.jpg";

class Books extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state =
        {
            Books: [
                {ISBN: "1", image: DefaultImage, title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "17th", author: "James Kessler QC", price: "350.00"},
                {ISBN: "2", image: DefaultImage, title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "18th", author: "James Kessler QC", price: "200.00"},
                {ISBN: "3", image: DefaultImage, title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "19th", author: "James Kessler QC", price: "150.00"},
                {ISBN: "4", image: DefaultImage, title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "120th", author: "James Kessler QC", price: "5.00"},]
        }
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-sm-8">
                <Store 
                items = {this.state.Books}
                addToBasket = {this.props.addToBasket}
                />
                </div>
                
                <div className="col-4">
                <Cart />
                </div>
            </div>
        );
    }
    
}
export default Books;