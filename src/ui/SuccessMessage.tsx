
import { Box, Typography } from '@mui/material';
import Container from './Container';

interface IProps {
    text: string;
}

const SuccessMessage = ({text} : IProps) => {
  return (
    <Container>
    <Box display='flex' flexDirection='column' gap='20px'  height='100%' justifyContent='center'>
      <img style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} src={require("../assets/images/checkmark.gif")}/>
      <Typography textAlign="center" variant="h6" >{text}</Typography>
    </Box>
  </Container>
  )
}

export default SuccessMessage