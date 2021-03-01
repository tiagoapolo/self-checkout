const { queryCategories, queryItems } = require('../models/menuModels');

const fetchMenuItems = ({ id, name, category, order = 'price' }) => {
  try {
    const isAsc = order[0] !== '-';
    const orderBy = isAsc ? order : order.substring(1);
    return queryItems({  id: Number(id), name, category, orderBy, isAsc  });
  } catch(e) {
    throw new Error(e.message)
  }
}

const fetchCategories = ({ category_id, name }) => {
  try {
    return queryCategories({ category_id: Number(category_id), name });
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  fetchMenuItems,
  fetchCategories
}