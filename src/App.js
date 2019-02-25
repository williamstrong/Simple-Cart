import React from 'react';

import CartPreviewContainer from './containers/CartPreviewContainer';
import ItemsContainer from './containers/ItemsContainer';

import Store from './Cart/store';

import './App.css';

const initialCart = {count: 0, itemIdsInCart: []};

function App() {
  return (
    <Store initialValue={initialCart}>
      <CartPreviewContainer />
      <ItemsContainer />
    </Store>
  );
}

export default App;
