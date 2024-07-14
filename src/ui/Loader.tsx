import React from 'react'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const StyledLoader = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        animation: ${spin} 1.5s linear infinite;
    }
`


const Loader = () => {
  return (
    <StyledLoader>
        <img src={require("../assets/images/doge.png")}/>
    </StyledLoader>
  )
}

export default Loader;