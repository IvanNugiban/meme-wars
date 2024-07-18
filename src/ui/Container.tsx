import React from 'react';
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  max-width: 1250px;
  min-height: 100%;
  margin: 0 auto;
  padding: 20px;
`

const Container = ({children} : React.PropsWithChildren) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;