const { fetchOrders, updateExistingOrder, placeOrder } = require('../services/orderService')


const getOrderHandler = (req, res, next) => {
  try {
    res.send(fetchOrders(req.params));
    next()
  } catch(error) {
    res.sendStatus(500) && next(error)
  }
}

const postOrderHandler = (req, res, next) => {
  try {
    res.send(placeOrder({ data: req.body }));
    next()
  } catch(error) {
    res.sendStatus(500) && next(error)
  }
}

const putOrderHandler = (req, res, next) => {
  try {
    const { order_id } = req.params;
    res.send(updateExistingOrder({ id: order_id, data: req.body }));
    next()
  } catch(error) {
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  getOrderHandler,
  postOrderHandler,
  putOrderHandler,
}