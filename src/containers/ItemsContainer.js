import React, {useContext} from 'react';

import {CartContext} from '../Cart/store';

import {items} from '../items';
import {isItemInCart} from '../Cart/reducers';

import Item from '../components/Item';

const ItemsContainer = () => {
  const [cartState, cartDispatch] = useContext(CartContext);

  function addToCart(itemId) {
    cartDispatch({type: 'add', itemId: itemId});
  }

  return (
    <div className="items">
      <p className="item-header">Items</p>
      {items.map(item => (
        <Item
          key={item.id}
          onAddToCart={() => addToCart(item.id)}
          name={item.name}
          id={item.id}
          isInCart={!isItemInCart(cartState.itemIdsInCart, item.id)}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
