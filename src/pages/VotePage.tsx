
import emotionStyled from '@emotion/styled'
import { Box, LinearProgress, linearProgressClasses, styled, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import Entries from '../store/Entries'
import ErrorMessage from '../ui/ErrorMessage'
import Loader from '../ui/Loader'
import { baseUrl } from '../utils/constants'
import IEvent from '../types/IEvent'
import SuccessMessage from '../ui/SuccessMessage'

const VoteContainer = emotionStyled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    filter: brightness(90%);
  }
`

const VoteImage = emotionStyled.img`
  max-height: 32vh;
  width: auto;
  height: auto;
`

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

interface IProps {
  event?: IEvent;
}

const VotePage = observer(({ event }: IProps) => {

  useEffect(() => {
    if (!Entries.fetched) Entries.getPair();
  }, [])


  if (Entries.isLoading) return <Loader />
  if (Entries.error) return <ErrorMessage text={Entries.error} />;
  if (!Entries.firstEntry || !Entries.secondEntry || !event) return <ErrorMessage text="No data to display." />
  if (Entries.userVoted === event.voteLimit) return <SuccessMessage text="You've used all the votes for today. Come back tomorrow!" />

  return (
    <Box  display='flex' height="100%" flexDirection='column' alignItems='center' justifyContent='space-between' >
      <VoteContainer onClick={() => Entries.vote(true)} style={{ backgroundColor: "#e90e08" }} >
        <VoteImage src={baseUrl + "\\" + Entries.firstEntry.image} />
        <BorderLinearProgress variant="determinate" value={50} />
      </VoteContainer>
      <Box position='relative' width="100%" minHeight="15px" sx={{ backgroundColor: "black" }}>
        <Box display='flex' justifyContent='center' alignItems='center' width='50px' height='50px' position="absolute" zIndex={10}
          left="50%" textAlign='center' sx={{ backgroundColor: "black", borderRadius: "50%", transform: "translate(-50%, -40%)" }} >
          <Typography fontFamily="cursive">
            OR
          </Typography>
        </Box>
      </Box>
      <VoteContainer onClick={() => Entries.vote(false)} style={{ backgroundColor: "#0576ff" }} >
        <VoteImage src={baseUrl + "\\" + Entries.secondEntry.image} />
      </VoteContainer>


      <Typography right='20px' top='12px' zIndex='10000'  position='absolute' fontFamily="cursive" fontSize='1em'>
        {Entries.userVoted}/{event.voteLimit}
      </Typography>
    </Box>
  )
})

export default VotePage