export const items = [
  {
    name: 'Item A',
    id: 1,
    description: 'Description of item A.',
  },
  {
    name: 'Item B',
    id: 2,
    description: 'Description of item B.',
  },
  {
    name: 'Item C',
    id: 3,
    description: 'Description of item C.',
  },
];

export function itemsById(itemId) {
  return items.filter(item => itemId.includes(item.id));
}
