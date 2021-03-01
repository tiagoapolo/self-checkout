const express = require('express');
const { getMenuHandler, getCategoriesHandler } = require('../controllers/menuController');
const { getOrderHandler, postOrderHandler, putOrderHandler } = require('../controllers/orderController');

const router = express.Router();

// Menu
router.get('/menu/categories', getCategoriesHandler);
router.get('/menu', getMenuHandler);
router.get('/menu/:id', getMenuHandler);

// Order
router.get('/order', getOrderHandler);
router.get('/order/:order_id', getOrderHandler);
router.post('/order', postOrderHandler);
router.put('/order/:order_id', putOrderHandler);

module.exports = router;