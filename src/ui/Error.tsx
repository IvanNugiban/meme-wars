
import React from 'react'
import Container from './Container'
import { Typography, Box } from '@mui/material'

interface IProps {
  message : string;
};

const Error = ({message} : IProps) => {
  return (
    <Container>
      <Box display='flex' flexDirection='column'  height='100%' justifyContent='center'>
        <Typography textAlign="center" variant="h5" >Whoops...</Typography>
        <Typography textAlign="center" variant="h6" >{message}</Typography>
      </Box>
    </Container>
  )
}

export default Error