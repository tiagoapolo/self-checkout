const { fetchMenuItems, fetchCategories } = require('../services/menuService')


const getMenuHandler = (req, res, next) => {
  try {
    const { name, category, order } = req.query;
    const { id } = req.params;

    if (id) {      
      return res.send(fetchMenuItems({ id, order }));
    }

    if (name || category) {
      return res.send(fetchMenuItems({ category, name, order }));
    }

    res.send(fetchMenuItems({ order }));

  } catch(error) {
    res.sendStatus(500) && next(error)
  }
}

const getCategoriesHandler = (_, res, next) => {
  try {
    res.send(fetchCategories({}));
  } catch(error) {
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  getMenuHandler,
  getCategoriesHandler,
}