import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList.jsx';

const inventoryAppDiv = document.getElementById('inventory-app');
ReactDOM.render(<ProductList />, inventoryAppDiv);

if (module.hot) {
  module.hot.accept();
}
