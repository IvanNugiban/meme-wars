
import React from 'react'
import Container from '../ui/Container'
import { Box, TextField, Button, Typography } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import HotWalletIcon from '../icons/HotWalletIcon';


const SubmitPage = () => {
  return (
    <Container>
      <Typography textAlign='center' variant='h5' fontFamily='cursive' sx={{marginBottom: "5px"}}>
          Upload your meme
      </Typography>

      <Typography textAlign='center' variant='h6' fontFamily='cursive'>
          (your meme will participate in tomorrow's contest)
      </Typography>
         <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,alignItems: 'center', gap: 2, p: 2 }} 
    >
      <TextField
        type="file"
        InputLabelProps={{ shrink: true }}
        inputProps={{ style: { display: 'none'} }}
        id="photo-upload"
      />
      <label htmlFor="photo-upload">
        <Button  variant="contained" color="primary" startIcon={<PhotoCamera/>}  >Upload meme</Button>
      </label>
      <Button  type="submit" variant="contained" color="primary" endIcon={<HotWalletIcon/>}>
        Submit - 0.25
      </Button>
    </Box>
    </Container>
  )
}

export default SubmitPage