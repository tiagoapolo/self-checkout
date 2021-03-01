import React from 'react';
import styled from 'styled-components';
import config from '../../config.json';

const baseUrl = process.env.REACT_APP_SERVER_URL || config.baseUrl;;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

function ItemImage({ imageId = '', imageExtension = '' }) {
  return (
      <StyledImage 
        alt="" 
        src={`${baseUrl}/images/${imageId}${imageExtension}`} 
      />
  )
}

export default ItemImage
