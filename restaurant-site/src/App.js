import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import NavItem from './NavItem/NavItem';
import HeaderContent from './HeaderContent/HeaderContent';
import About from './About/About';
import Ingredients from './Ingredients/Ingredients';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Navbar>
            <NavItem></NavItem>
          </Navbar>
          <HeaderContent></HeaderContent>
        </Header>
        <About/>
        <Ingredients/>
        <Menu/>
        <Reviews/>
        <Footer/>
      </div>
    );
  }
}

export default App;
