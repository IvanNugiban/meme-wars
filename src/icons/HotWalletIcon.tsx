import React from 'react'
import { Icon } from '@mui/material'
import styled from '@emotion/styled'

const EnlargedImage = styled.img`
    transform: scale(1.5);
`

const HotWalletIcon = () => {
    return (
        <Icon >
            <EnlargedImage src={require("../assets/icons/hot.svg").default}  />
        </Icon>
    )
}

export default HotWalletIcon