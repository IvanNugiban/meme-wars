import React from "react";
import HotWallet from "../store/HotWallet";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import Container from "../ui/Container";
import { Box, Button, Typography } from "@mui/material";
import HotWalletIcon from "../icons/HotWalletIcon";



const Title = styled.h1`
    color: white;
    font-size: 100px;
    line-height: 1em;
    font-family: "Unispace", sans-serif;
    margin-top: 20px;
    font-weight: 500;

    span {
    text-shadow:   0.000em 0.075em #080225, 
    0.029em 0.069em #080225, 
    0.053em 0.053em #080225, 
    0.069em 0.029em #080225, 
    0.075em 0.000em #080225, 
    0.069em -0.029em #080225, 
    0.053em -0.053em #080225, 
    0.029em -0.069em #080225, 
    0.000em -0.075em #080225, 
    -0.029em -0.069em #080225, 
    -0.053em -0.053em #080225, 
    -0.069em -0.029em #080225, 
    -0.075em -0.000em #080225, 
    -0.069em 0.029em #080225, 
    -0.053em 0.053em #080225,
    -0.029em 0.069em #080225;
    }
    
    span:first-of-type {
        -webkit-text-stroke: 3px #5d8dd5a9;
    }

    span:last-of-type {
        -webkit-text-stroke: 3px #ca2236a1;
    }
`

const Wrapper = styled.div`
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`

const AuthPage = observer(() => {
    return (
            <Container>
                <Wrapper>
                    <Box display='flex' flexDirection='column' rowGap='20px'>
                        <Title>
                            <span>MEME</span>
                            <br />
                            <span>WARS</span>
                        </Title>
                    </Box>
                    <img height="250px" src={require('../assets/images/pop-cat.gif')}/>
                    <Button style={{ fontSize: '1em' }} variant="contained" endIcon={<HotWalletIcon/>} onClick={HotWallet.login}>Connect hot wallet</Button>
                </Wrapper>
            </Container>
    );
})

export default AuthPage;