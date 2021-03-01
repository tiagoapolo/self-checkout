import React from 'react'
import api from '../../api/api'
import CheckoutDrawer from '../../components/CheckoutDrawer/CheckoutDrawer';
import ItemCard from '../../components/ItemCard/ItemCard';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';
import Loader from '../../components/Loader/Loader';

function MenuPage() {

  const [isLoading, setLoading] = React.useState(true);
  const [menuList, setMenuList] = React.useState([]);
  const [selectedItems, setSelectedItems] = React.useState([]);

  React.useEffect(() => {      
    api.get('/menu')
    .then(response => {
      setMenuList(response.data || []);      
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const handleSelectedItem = (selected) => {
    if (!selected.isSelected) {
      setSelectedItems(selectedItems.filter(currItem => currItem.id !== selected.item.id));
      return;
    }
    setSelectedItems([...selectedItems, selected.item])
  }

  return (
    <div>
      <ItemsGrid>
        {menuList.map(menuItem => (
          <ItemCard 
            key={menuItem.id} 
            menuItem={menuItem}
            onClick={handleSelectedItem}          
          />
        ))}
      </ItemsGrid>
      <CheckoutDrawer selectedItems={selectedItems} />
    </div>
  )
}

export default MenuPage
