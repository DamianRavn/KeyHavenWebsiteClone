import React, { Component } from 'react';
import {Header} from "./modules/Header";
import {Navigation} from "./modules/Navigation";
import Home from "./Content/Home";
import Books from "./Content/Books";
import Cart from "./Content/Cart";
import {Reviews} from "./Content/Reviews";
import 'bootstrap/dist/css/bootstrap.min.css';


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
        {link: "/login", name: "Login", content: Home},
        {link: "/contact", name: "Contact", content: Home},
        {link: "/cart", name: "Cart", content: Cart},
        
      ],

      CartList: [],
    }
    this.getStateFromLocalStorage = this.getStateFromLocalStorage.bind(this);
    this.AddToBasket = this.AddToBasket.bind(this);
    this.RemoveFromBasket = this.RemoveFromBasket.bind(this);
  }

  componentDidMount()
  {
    this.getStateFromLocalStorage();
  }
  getStateFromLocalStorage()
  {
    if(localStorage.hasOwnProperty("CartList"))
    {
      let savedCart = localStorage.getItem("CartList")
      try 
      {
        savedCart = JSON.parse(savedCart);
        this.setState({CartList: savedCart});  
      } catch (error) 
      {
        this.setState({CartList: []});
      }
    }
  }

  AddToBasket(object)
  {
    const newCartList = [... this.state.CartList, object];

    this.setState(()=>
    ({
      CartList: [...newCartList]
    })
    )
    localStorage.setItem("CartList",JSON.stringify(newCartList));
  }
  RemoveFromBasket(isbn)
  {
    const newCartList = [... this.state.CartList.filter(todoCom => todoCom.isbn != isbn)];
      
    this.setState(
        () =>
        ({
          CartList: [...newCartList]
        })
    )

    localStorage.setItem("CartList",JSON.stringify(newCartList));
  }

  render() 
  {
    const FunctionList = 
    { 
      AddToBasket: this.AddToBasket, 
      RemoveFromBasket: this.RemoveFromBasket
    };

    return (
      <div className="App container-fluid">
        <Header 
        NavHeaderList = {this.state.NavHeaderList}
        NavBarList = {this.state.NavBarList}
        />
        
        <Navigation
        NavList = {[...this.state.NavBarList, ...this.state.NavHeaderList]}
        CartList = {this.state.CartList}
        FunctionList = {FunctionList}
        />

        {/*TODO: Footer */}
      </div>
    );
  }
}

export default App;
