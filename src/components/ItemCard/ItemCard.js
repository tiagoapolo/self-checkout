import React from 'react'
import styled from 'styled-components'
import ItemImage from '../ItemImage/ItemImage';
import ItemLabel from '../ItemLabel/ItemLabel';

const ItemCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  :hover {
    cursor: pointer;
  }
`;

const ItemCardTop = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 4px solid ${props => !props.isSelected ? '#e0e0e0' : '#009688'};
`;

const ItemCardPrice = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ItemName = styled.div`
  text-align: center;
  margin-top: 6px;
`

function ItemCard({ menuItem, onClick }) {

  const [isItemSelected, setItemSelected] = React.useState(false)

  if (!menuItem) {
    return 'loading';
  }

  return (
    <ItemCardStyle onClick={() => {
      onClick({ item: menuItem, isSelected: !isItemSelected });
      setItemSelected(!isItemSelected);
    }}>
      <ItemCardTop isSelected={isItemSelected}>
        <ItemImage
          imageId={menuItem.image_id}
          imageExtension={menuItem.image_extension} 
        />
        <ItemCardPrice>
          <ItemLabel text={menuItem.price}/>
        </ItemCardPrice>
        
      </ItemCardTop>
      <ItemName>{menuItem.name}</ItemName>
    </ItemCardStyle>
  )
}

export default ItemCard
