import React, { Component } from 'react';
import {Header} from "./modules/Header";
import NavigationBar from "./modules/NavigationBar";
import {Navigation} from "./modules/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component 
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      NavList: [
        {link: "", name: "Home",},
        {link: "books", name: "Books",},
        {link: "reviews", name: "Reviews",},
        {link: "conferences", name: "Conferences", },
        {link: "about", name: "About", },
        {link: "keep-up-to-date", name: "Keep up to date", }]
    }
  }
  render() 
  {
    return (
      <div className="App">
        <Header />
        <NavigationBar
        NavList = {this.state.NavList}
        />
        <Navigation
        NavList = {this.state.NavList}
        />
      </div>
    );
  }
}

export default App;
