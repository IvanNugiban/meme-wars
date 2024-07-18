
import { Box, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import Entries from '../store/Entries'
import Loader from '../ui/Loader'

const VotePage = observer(() => {

  useEffect(() => {
    Entries.getPair();
  }, [])

  if (Entries.isLoading) return <Loader />
  //if (Entries.error || !Entries.firstEntry || !Entries.secondEntry) return <Error message=''/>;

  return (
    <Box display='flex' height="100%" flexDirection='column' alignItems='center' justifyContent='space-between' >
      <Box sx={{ backgroundColor: "#e90e08" }} width="100%" height="100%">

      </Box>
      <Box width="100%" minHeight="15px" sx={{backgroundColor: "black"}}>
        <Box position="absolute" left="50%" padding="15px" sx={{backgroundColor: "black", borderRadius: "50%", transform: "translate(-50%, -50%)"}} >
            <Typography variant='h5' fontFamily="cursive">
                    OR
            </Typography>
        </Box>
      </Box>

      <Box height="100%" width="100%"  >
        
      </Box>
    </Box>
  )
})

export default VotePage