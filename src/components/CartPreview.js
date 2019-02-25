import React from 'react';

const CartPreview = props => {
  return (
    <div className="cart">
      <button type="button" onClick={props.onClose}>
        X
      </button>
      {props.count > 0 ? (
        props.items.map(item => (
          <React.Fragment key={item.name}>
            <p key={item.name}>{item.name}</p>
            <p key={item.description}>{item.description}</p>
            <button type="button" onClick={() => props.onRemoveItem(item.id)}>
              Delete
            </button>
          </React.Fragment>
        ))
      ) : (
        <p>There are currently no items in your cart</p>
      )}
    </div>
  );
};

export default CartPreview;
