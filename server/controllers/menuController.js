const { fetchMenuItems, fetchCategories } = require('../services/menuService')


const getMenuHandler = (req, res, next) => {
  try {
    const { name, category, order } = req.query;
    const { id } = req.params;

    if (id) {      
      res.send(fetchMenuItems({ id, order }));
      next();
    }

    if (name || category) {
      res.send(fetchMenuItems({ category, name, order }));
      next();
    }

    res.send(fetchMenuItems({ order }));
    next();

  } catch(error) {
    res.sendStatus(500) && next(error);
    next();
  }
}

const getCategoriesHandler = (_, res, next) => {
  try {
    res.send(fetchCategories({}));
    next();
  } catch(error) {
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  getMenuHandler,
  getCategoriesHandler,
}