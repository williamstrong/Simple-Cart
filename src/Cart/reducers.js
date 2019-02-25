export function isItemInCart(itemIdsInCart, itemId) {
  return itemIdsInCart.includes(itemId);
}

export function cartItemsReducer(state, action) {
  switch (action.type) {
    case 'add':
      if (!isItemInCart(state.itemIdsInCart, action.itemId)) {
        return {
          count: state.count + 1,
          itemIdsInCart: [...state.itemIdsInCart, action.itemId],
        };
      } else {
        return state;
      }
    case 'remove':
      return {
        count: state.count - 1,
        itemIdsInCart: [
          ...state.itemIdsInCart.filter(item => item !== action.itemId),
        ],
      };
    case 'init':
      return state;
    default:
      throw new Error();
  }
}
