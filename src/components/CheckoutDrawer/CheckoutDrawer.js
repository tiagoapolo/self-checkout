import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ItemLabel from '../ItemLabel/ItemLabel';

const CheckoutDrawerStyle = styled.div`
  position: fixed;
  top: 10px;
  right: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    right: 60px;
  }

`; 

const TotalAmount = styled.div`
  color: #fff;
  font-weight: bold;
  width: 80px;
  height: 80px;
  background: #009688;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PayNowContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;

function CheckoutDrawer({ selectedItems }) {

  const history = useHistory();
  
  const totalAmount = (items = []) => {
    const total = items.reduce((prev, item) =>  prev + item.price, 0.0);
    return Math.round(total * 100) / 100;
  };

  const handleClick = () => {
    history.push('/checkout', { items: selectedItems, totalAmount: totalAmount(selectedItems) });
  }

  return (
    <CheckoutDrawerStyle>
      <TotalAmount>
        <span>
         ${totalAmount(selectedItems)}
        </span>
      </TotalAmount>
      {selectedItems && 
        selectedItems.length > 0 && 
        <PayNowContainer onClick={handleClick}>
          <ItemLabel text="Pay now" />
        </PayNowContainer>}
    </CheckoutDrawerStyle>
  )
}

export default CheckoutDrawer
