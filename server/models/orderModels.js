
const orderDB = {
  lastOrderIndex: 0,
  orders: [],
};

const queryOrders = ({ id }) => {
  if (id) {
    return orderDB.orders.filter((order) => order.id === id);
  }
  
  return orderDB.orders;
}

const createOrder = ({ data }) => {
  if (data) {
    const newIdx = orderDB.lastOrderIndex + 1;
    orderDB.lastOrderIndex = newIdx;
    const payload = { ...data, id: newIdx };
    orderDB.orders.push(payload)
    return payload;
  }

  return new Error('Invalid data');
}

const updateOrder = ({ id, data }) => {
  const idx = orderDB.orders.findIndex((order) => order.id === id);
  orderDB.orders[idx] = data;
  return data;
}

module.exports = {
  queryOrders,
  createOrder,
  updateOrder,
}