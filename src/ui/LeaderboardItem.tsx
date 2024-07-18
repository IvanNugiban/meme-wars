
import React from 'react'
import ILeaderboardItem from '../types/ILeaderboardItem'
import { Box, Typography } from '@mui/material';

interface IProps {
    data: ILeaderboardItem;
    position : number;
}

const LeaderboardItem = ({data, position} : IProps) => {
  return (
    <Box display='flex' justifyContent='space-between' sx={{backgroundColor: 'black'}} padding='10px 20px'>
        <Typography>{position}</Typography>
        <img src={data.image}/>
        <Typography>{data.nearId}</Typography>
        <Typography>{data.reward}</Typography>
    </Box>
  )
}

export default LeaderboardItem