import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableProductTable from "./components/FilterableProductTable.js";

class Message extends React.Component {
    render() {
        const message = this.props.message;
        return (
            <h1 className="App-title">{message}</h1>
        )
    }
}

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

function App () {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
        .then(response => response.text())
        .then(message => {
          setMessage(message);
        });
  },[])
  return (
      <div>
          <FilterableProductTable products={PRODUCTS} />
          <Message message={message} />
      </div>
  )
}
export default App;
