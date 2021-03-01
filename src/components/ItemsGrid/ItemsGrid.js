import React from 'react'
import styled from 'styled-components'

const ItemsGridStyle = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 696px;
  margin: auto;
  position: relative;
`

//   grid-template-columns: auto auto auto;

function ItemsGrid({ children }) {
  return (
    <ItemsGridStyle>
      {children}
    </ItemsGridStyle>
  )
}

export default ItemsGrid
