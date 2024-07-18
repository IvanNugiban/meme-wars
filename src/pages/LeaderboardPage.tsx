import React, { useEffect } from 'react'
import Container from '../ui/Container'
import { Box, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import Leaderboard from '../store/Leaderboard'
import LeaderboardItem from '../ui/LeaderboardItem'
import Loader from '../ui/Loader'
import ILeaderboardItem from '../types/ILeaderboardItem'

const LeaderboardPage = observer(() => {

  useEffect(() => {
    Leaderboard.fetch();
  }, [])

  if (Leaderboard.isLoading) return <Loader />
  //if (Leaderboard.error || Leaderboard.items.length() == 0) return <Error message=''/>;

  return (
    <div>
      <Container>
        <Typography fontFamily='Unispace' textAlign="center" variant="h4" component="div">
          Leaderboard
        </Typography>
      </Container>
     <Box height='100%'>
     {Leaderboard.items.map((item : ILeaderboardItem, index : number) => <LeaderboardItem data={item} position={index + 1}/>)}
     </Box>
    </div>
  )
})

export default LeaderboardPage