import React, {useReducer} from 'react';

import {cartItemsReducer} from './reducers';

const CartContext = React.createContext(null);

function CartStore(props) {
  const initialState = cartItemsReducer(props.initialValue, {type: 'init'});
  const [cartState, cartDispatch] = useReducer(cartItemsReducer, initialState);

  return (
    <CartContext.Provider value={[cartState, cartDispatch]}>
      {props.children}
    </CartContext.Provider>
  );
}

export {CartContext};
export default CartStore;
