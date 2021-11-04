import './App.css';
import React from 'react';
import goods from './goods.json';
import Goods from './Goods';

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
          <div className="container">
            <h1>Cart</h1>
            <div className="goods-field">
              {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul}/>)}
            </div>
          </div>
        </>
    )
  }
}

export default App;
