import React, {useEffect, useContext} from 'react';

import {CartContext} from '../CartStore';

import {items} from '../items';

const ItemsContainer = () => {
  const [cartState, cartDispatch] = useContext(CartContext);

  function addToCart(itemId) {
    cartDispatch({type: 'add', itemId: itemId});
  }

  return (
    <div className="items">
      <p className="item-header">Items</p>
      {items.map((item, key) => (
        <button key={key} type="button" onClick={() => addToCart(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ItemsContainer;
