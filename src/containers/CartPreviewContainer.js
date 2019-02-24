import React, {useState, useEffect, useContext} from 'react';

import {CartContext} from '../CartStore';

import CartCount from '../components/CartCount';
import CartPreview from '../components/CartPreview';
import {itemsById} from '../items';

const CartPreviewContainer = props => {
  const [isActive, setIsActive] = useState(false);

  const [cartState, cartDispatch] = useContext(CartContext);

  const {count} = cartState;
  const {itemsInCart} = cartState;
  const items = itemsById(itemsInCart);

  useEffect(
    () => {
      document.title = `${count} items in cart.`;
    },
    [count],
  );

  const togglePreview = () => {
    setIsActive(!isActive);
  };

  const removeItem = itemId => {
    cartDispatch({type: 'remove', itemId: itemId});
  };

  return (
    <>
      {isActive && (
        <CartPreview
          count={count}
          onClose={togglePreview}
          onRemoveItem={removeItem}
          items={items}
        />
      )}
      {!isActive && <CartCount count={count} onButtonClick={togglePreview} />}
    </>
  );
};

export default CartPreviewContainer;
