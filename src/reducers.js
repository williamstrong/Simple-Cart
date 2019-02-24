export function isItemInCart(itemsInCart, itemId) {
  return itemsInCart.includes(itemId);
}

export function cartItemsReducer(state, action) {
  switch (action.type) {
    case 'add':
      if (!isItemInCart(state.itemsInCart, action.itemId)) {
        return {
          count: state.count + 1,
          itemsInCart: [...state.itemsInCart, action.itemId],
        };
      } else {
        return state;
      }
    case 'remove':
      return {
        count: state.count - 1,
        itemsInCart: [
          ...state.itemsInCart.filter(item => item !== action.itemId),
        ],
      };
    case 'init':
      return state;
    default:
      throw new Error();
  }
}
