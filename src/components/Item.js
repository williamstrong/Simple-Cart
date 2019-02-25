import React from 'react';

function Item(props) {
  return (
    <>
      <p>{props.name}</p>
      <button
        type="button"
        disabled={!props.isInCart}
        onClick={() => props.onAddToCart(props.id)}>
        {props.isInCart ? 'Add to cart' : 'Already in cart'}
      </button>
    </>
  );
}

export default Item;
