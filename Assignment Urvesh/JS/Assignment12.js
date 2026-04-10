
// JS Assignment 3: (2) Order Processing


const orders = [
  {
    id: 1,
    items: [
      { name: "Book", price: 50, qty: 2 },
      { name: "Pen", price: 20, qty: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { name: "Bag", price: 500, qty: 1 },
      { name: "Pencil", price: 5, qty: 5 }
    ]
  }
];

const processedOrders = orders.map(order => {
  const totalAmount = order.items.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  const totalQuantity = order.items.reduce(
    (sum, item) => sum + item.qty, 0
  );

  return {
    ...order,
    totalAmount,
    totalQuantity
  };
});

console.log(processedOrders);

