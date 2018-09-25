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
  constructor(link, name, content)
  {
    this.link = link;
    this.name = name;
    this.content = content;
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
      NavBarList: [
        new NavigationObject("/", "Home", Home),
        new NavigationObject("/books", "Books", Books),
        new NavigationObject("/reviews", "Reviews", Reviews),
        /*{link: "/conferences", name: "Conferences", content: Home},
        {link: "/about", name: "About", content: Home},
        {link: "/keep-up-to-date", name: "Keep up to date", content: Home},*/
      ],
     
      NavHeaderList: [
        new NavigationObject("/login", "Login", Home),
        new NavigationObject("/contact", "Contact", Home),
        new NavigationObject("/cart", "Cart", Cart),
      ],

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
    return (
      <div className="App container-fluid">
        <Header 
        NavHeaderList = {this.state.NavHeaderList}
        NavBarList = {this.state.NavBarList}
        />
        
        <Navigation
        NavList = {[...this.state.NavBarList, ...this.state.NavHeaderList]}
        CartList = {this.state.CartList}
        AddToBasket = {this.AddToBasket}
        RemoveFromBasket = {this.RemoveFromBasket}
        />

        {/*TODO: Footer */}
      </div>
    );
  }
}

export default App;
