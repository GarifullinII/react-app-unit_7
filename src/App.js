import './App.css';
import React from "react";
import goods from './goods.json';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      cart: {}, // объект корзины
      count: 0  // счетчик товаров
    }
  }

  render() {
    return (
        <>
        </>
    )
  }
}

export default App;
