import React, { Component } from 'react';
import {Header} from "./modules/Header";
import {Navigation} from "./modules/Navigation";
import Home from "./Content/Home";
import Books from "./Content/Books";
import Cart from "./Content/Cart";
import {Reviews} from "./Content/Reviews";
import 'bootstrap/dist/css/bootstrap.min.css';
import autobind from 'class-autobind';

class NavigationObject
{
  constructor(link = "/", name = "Home", content = Home, functions = {}, lists = {}, )
  {
    this.link = link;
    this.name = name;
    this.content = content;
    this.lists = lists;
    this.functions = functions;
  }
}

class App extends Component 
{
  constructor(props)
  {
    super(props);
    autobind(this);
    this.state=
    {
      CartList: [],
    }
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
  UpdateLocalStorageCartList(newList)
  {
    localStorage.setItem("CartList",JSON.stringify(newList));
  }

  AddToBasket(object)
  {
    const newCartList = [... this.state.CartList, object];

    this.setState(()=>
    ({
      CartList: [...newCartList]
    })
    )
    this.UpdateLocalStorageCartList(newCartList);
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

    this.UpdateLocalStorageCartList(newCartList);
  }
  RemoveSingleItemFromBasket(isbn)
  {
    const i = this.state.CartList.findIndex(item => item.isbn === isbn);
    const newCartList = [...this.state.CartList];
    newCartList.splice(i, 1);

    this.setState(
      () =>
      ({
        CartList: [...newCartList]
      })
    )
    this.UpdateLocalStorageCartList(newCartList);
  }

  render() 
  {
    const NavBarList = [
      new NavigationObject("/", "Home", Home, {AddToBasket: this.AddToBasket}),
      new NavigationObject("/books", "Books", Books, {AddToBasket: this.AddToBasket}, {CartList: this.state.CartList}),
      new NavigationObject("/reviews", "Reviews", Reviews),
    ];
    const NavHeaderList= [
      new NavigationObject("/login", "Login", Home),
      new NavigationObject("/contact", "Contact", Home),
      new NavigationObject("/cart", "Cart", Cart, {AddToBasket: this.AddToBasket, RemoveFromBasket: this.RemoveFromBasket, RemoveSingleItemFromBasket: this.RemoveSingleItemFromBasket}, {CartList: this.state.CartList}),
    ];
    return (
      <div className="App container-fluid">
        <Header 
        NavHeaderList = {NavHeaderList}
        NavBarList = {NavBarList}
        />
        
        <Navigation
        NavList = {[...NavBarList, ...NavHeaderList]}
        />

        {/*TODO: Footer */}
      </div>
    );
  }
}

export default App;
