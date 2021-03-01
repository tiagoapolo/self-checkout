const { createOrder, updateOrder, queryOrders } = require('../models/orderModels')

const calculateTotalAmount = (items = []) => items.reduce((prev, curr) => prev + Number(curr.price), 0);

const fetchOrders = ({ id }) => {
  try {
    
    if (!id) {
      return queryOrders({})
    }

    return queryOrders({ id: Number(id) })

  } catch(e) {
    throw new Error(e.message)
  }
}

const placeOrder = ({ data }) => {
  try {

    if (!data.items || !data.items.length) {
      throw new Error('No provided items');
    }    
    const payload = { ...data, totalAmount: calculateTotalAmount(data.items) };
    return createOrder({ data: payload  });

  } catch(e) {
    throw new Error(e.message)
  }
}

const updateExistingOrder = ({ id, data  }) => {
  try {

    if (!id) {
      throw new Error('No order id provided');
    }

    if (data.items && !Array.isArray(data.items)) {
      throw new Error('Items must be a list');
    }

    if (!queryOrders({ id: Number(id) }).length) {
      throw new Error('Order not found!');
    }

    const existingOrder = queryOrders({ id: Number(id) })[0];   
    let payload = { ...existingOrder };
    
    if (data.items) {
      payload.items = data.items;
      payload.total_amount = calculateTotalAmount(data.items);
    }

    if (data.status) {
      payload.status = data.status;
    }
        
    return updateOrder({ id: existingOrder.id, data: payload });

  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  placeOrder,
  fetchOrders,
  updateExistingOrder
}