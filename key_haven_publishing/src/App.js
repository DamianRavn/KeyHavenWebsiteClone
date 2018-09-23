import React, { Component } from 'react';
import {Header} from "./modules/Header";
import {Navigation} from "./modules/Navigation";
import Home from "./Content/Home";
import Books from "./Content/Books";
import {Reviews} from "./Content/Reviews";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from "./Images/CartIcon.png"


class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      NavBarList: [
        {link: "/", name: "Home", content: Home},
        {link: "/books", name: "Books", content: Books},
        {link: "/reviews", name: "Reviews", content: Reviews},
        {link: "/conferences", name: "Conferences", content: Home},
        {link: "/about", name: "About", content: Home},
        {link: "/keep-up-to-date", name: "Keep up to date", content: Home},
      ],

      NavHeaderList: [
        {link: "/login", name: "Login", content: Home, icon: CartIcon},
        {link: "/contact", name: "Contact", content: Home, icon: CartIcon},
        {link: "/cart", name: "Cart", content: Home, icon: CartIcon},
        
      ]
    }
  }
  render() 
  {
    return (
      <div className="App container-fluid">
        <Header 
        NavHeaderList = {this.state.NavHeaderList}
        NavBarList = {this.state.NavBarList}
        />
        
        <Navigation
        NavBarList = {[...this.state.NavBarList, ...this.state.NavHeaderList]}
        />

        {/*The opsite of a header here */}
      </div>
    );
  }
}

export default App;
