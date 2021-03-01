import React from 'react'
import styled from 'styled-components'
const ItemLabelStyle = styled.div`
  border: 1px solid transparent;
  background: white;
  padding: 6px;
  border-radius: 16px;
  font-weight: bold;
  min-width: 60px;
  text-align: center;
`;

function ItemLabel({ text }) {
  return (
    <ItemLabelStyle>
      {text}
    </ItemLabelStyle>
  )
}

export default ItemLabel
