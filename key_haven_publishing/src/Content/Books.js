import React from "react"
import Store from "./Store";
import Cart from "./Cart";

class Books extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            Books: [
                {isbn: "1", image: "/DefaultImage.jpg", title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "17th", author: "James Kessler QC", price: "350.00"},
                {isbn: "2", image: "/DefaultImage.jpg", title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "18th", author: "James Kessler QC", price: "200.00"},
                {isbn: "3", image: "/DefaultImage.jpg", title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "19th", author: "James Kessler QC", price: "150.00"},
                {isbn: "4", image: "/DefaultImage.jpg", title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "120th", author: "James Kessler QC", price: "5.00"},
                {isbn: "5", image: "/DefaultImage.jpg", title: "Taxation ", edition: "120th", author: "James Kessler QC", price: "5.00"},
                {isbn: "6", image: "/DefaultImage.jpg", title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "120th", author: "James Kessler QC", price: "5.00"},
                {isbn: "7", image: "/DefaultImage.jpg", title: "Taxation of Non-Residents and Foreign Domiciliaries", edition: "120th", author: "James Kessler QC", price: "5.00"},]
        }
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-sm-8">
                <Store 
                bookItems = {this.state.Books}
                CartList = {this.props.CartList}
                AddToBasket = {this.props.AddToBasket}
                />
                </div>
                
                <div className="col-4">
                <Cart
                CartList = {this.props.CartList}
                RemoveFromBasket = {this.props.RemoveFromBasket}
                RemoveSingleItemFromBasket = {this.props.RemoveSingleItemFromBasket}
                />
                </div>
            </div>
        );
    }
    
}
export default Books;