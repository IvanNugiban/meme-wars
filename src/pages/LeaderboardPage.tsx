import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useMemo, useState } from 'react'
import HotWallet from '../store/HotWallet'
import Leaderboard from '../store/Leaderboard'
import IEntry from '../types/IEntry'
import IEvent from '../types/IEvent'
import Container from '../ui/Container'
import ErrorMessage from '../ui/ErrorMessage'
import EventPeriod from '../ui/EventPeriod'
import LeaderboardItem from '../ui/LeaderboardItem'
import Loader from '../ui/Loader'
import { baseUrl } from '../utils/constants'

interface IProps {
  event?: IEvent;
}

const LeaderboardPage = observer(({ event }: IProps) => {

  const [isCurrentEvent, setIsCurrentEvent] = useState(true);
  const [activeEntry, setActiveEntry] = useState<IEntry | null>(null);


  const handleChange = () => {
    setIsCurrentEvent(!isCurrentEvent);
  };

  useEffect(() => {
    if (!Leaderboard.fetched) Leaderboard.getPrevious();
  }, [])

  const leaderboardData: IEvent | undefined | null = isCurrentEvent ? event : Leaderboard.previousEvent;

  const userEntry = useMemo(() => {
    if (leaderboardData) {
      const index = leaderboardData.entries.findIndex(item => item.nearId === HotWallet.user?.nearAccountId);

      if (index === -1) return undefined;

      return {
        entry: leaderboardData.entries[index],
        position: index + 1
      }
    }
  }, [leaderboardData, HotWallet.user]);

  if (Leaderboard.isLoading) return <Loader />

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>

      <Tabs
        sx={{ padding: "10px 0 20px 0" }}
        textColor='secondary'
        indicatorColor='secondary'
        value={isCurrentEvent ? 0 : 1}
        onChange={handleChange}
        role="navigation"
      >
        <Tab label="Active event" />
        <Tab label="Previous event" />
      </Tabs>

      {!leaderboardData || leaderboardData.entries.length === 0 ? <ErrorMessage text={"There is no data to display."} />
        :
        <React.Fragment>
          <EventPeriod startDate={leaderboardData.startDate} endDate={leaderboardData.endDate} />
          <TableContainer sx={{ marginTop: "15px" }} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: '20px', maxWidth: '20%' }}>Position</TableCell>
                  <TableCell style={{ minWidth: '20px', maxWidth: '50%' }}>Near id</TableCell>
                  <TableCell style={{ minWidth: '50px', maxWidth: '20%' }}>Reward</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userEntry && <LeaderboardItem onClick={() => setActiveEntry(userEntry.entry)} entry={userEntry.entry} position={userEntry.position} highlighted />}
                {leaderboardData.entries.map((row, index) => {
                  // Skip rendering if it's current user entry
                  if (row.nearId === HotWallet.user?.nearAccountId) return null;
                  return (
                    <LeaderboardItem onClick={() => setActiveEntry(row)} key={row.nearId} entry={row} position={index + 1} />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {activeEntry && <Dialog open={true} onClose={() => setActiveEntry(null)}>
            <DialogTitle>{activeEntry.nearId}</DialogTitle>
            <DialogContent>
              <img src={baseUrl + "\\" + activeEntry.image} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setActiveEntry(null)} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          }

        </React.Fragment>
      }
    </Container>
  )
})

export default LeaderboardPage