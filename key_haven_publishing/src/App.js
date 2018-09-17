import React, { Component } from 'react';
import {Header} from "./modules/Header";
import NavigationBar from "./modules/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <Header />
        <NavigationBar />
      </div>
    );
  }
}

export default App;
