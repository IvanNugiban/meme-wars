
import React from 'react'
import Container from './Container'
import { Typography, Box } from '@mui/material'

interface IProps {
  text : string;
};

const ErrorMessage = ({text} : IProps) => {
  return (
    <Container>
      <Box display='flex' flexDirection='column'  height='100%' justifyContent='center' gap='30px'>
      <img style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', borderRadius: "20px" }} src={require("../assets/images/oops.gif")}/>
        <Typography textAlign="center" variant="h6" >{text}</Typography>
      </Box>
    </Container>
  )
}

export default ErrorMessage