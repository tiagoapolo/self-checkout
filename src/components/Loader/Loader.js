import React from 'react'
import styled from 'styled-components';

const LoaderStyle = styled.div`
  height: 100vh;
  width: 100%;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    border: 6px solid #f3f3f3; /* Light grey */
    border-top: 6px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`; 

function Loader() {
  return (
    <LoaderStyle>
      <div className="loader"/>
    </LoaderStyle>
  )
}

export default Loader
