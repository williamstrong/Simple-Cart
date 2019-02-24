import React from 'react';

const CartCount = props => {
  return (
    <button className="cart" onClick={props.onButtonClick} type="button">
      <p>{props.count}</p>
    </button>
  );
};

export default CartCount;
