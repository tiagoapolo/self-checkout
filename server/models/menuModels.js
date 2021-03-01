const menuData = require('./menuData.json');

const queryCategories = ({ category_id, name }) => {
  if (category_id) {
    return menuData.categories.filter((categoryItem) => categoryItem.id === category_id);
  }
  
  return menuData.categories;
}

const queryItems = ({ id, name, category, orderBy, isAsc }) => {
  if (id) {
    return menuData.items.filter((item) => item.id === id)
    .sort((a, b) => !isAsc ? b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy]);
  }

  if (name) {
    return menuData.items.filter((item) => 
      item.name.toLowerCase() === name.toLowerCase() || 
      item.name.toLowerCase().includes(name.toLowerCase()))
      .sort((a, b) => !isAsc ? b[name] - a[name] : a[name] - b[name]);
  }

  if (category) {
    const categoryFound = menuData.categories.find((categoryItem) => 
      categoryItem.name.toLowerCase() === category.toLowerCase() || 
      categoryItem.name.toLowerCase().includes(category.toLowerCase())) || {};
    return menuData.items.filter((item) => item.category_id === categoryFound.id);
  }
  
  return menuData.items.sort((a, b) => !isAsc ? b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy]);
}

module.exports = {
  queryCategories,
  queryItems
}