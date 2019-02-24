import React from 'react';

import CartPreviewContainer from './containers/CartPreviewContainer';
import ItemsContainer from './containers/ItemsContainer';

import CartStore from './CartStore';

import './App.css';

const initialCart = {count: 0, itemsInCart: []};

function App() {
  return (
    <CartStore initialValue={initialCart}>
      <CartPreviewContainer />
      <ItemsContainer />
    </CartStore>
  );
}

export default App;
