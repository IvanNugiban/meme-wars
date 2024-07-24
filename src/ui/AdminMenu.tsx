import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { CircularProgress, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react';
import axiosHelper from '../utils/axiosHelper';


const AdminMenu = () => {

  const [open, setOpen] = useState(false);
  const [nextEntriesLoading, setNextEntriesLoading] = useState(false);
  const [currentEntriesLoading, setCurrentEntriesLoading] = useState(false);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [endEventLoading, setEndEventLoading] = useState(false);

  const actions = [
    {
      icon: !nextEntriesLoading ? <AddAlarmIcon /> : <CircularProgress size={24} />, name: 'Add entries for next event',
      callback: async () => {
        if (nextEntriesLoading) return;
        setNextEntriesLoading(true);
        await axiosHelper.request("/entries/addTest", "POST", { current: false })
        setNextEntriesLoading(false);
      }
    },
    {
      icon: !currentEntriesLoading ? <AddAPhotoIcon /> : <CircularProgress size={24} />, name: 'Add entries for current event',
      callback: async () => {
        if (currentEntriesLoading) return;
        setCurrentEntriesLoading(true);
        await axiosHelper.request("/entries/addTest", "POST", { current: true })
        setCurrentEntriesLoading(false);
      }
    },
    {
      icon: !leaderboardLoading ? <RefreshIcon /> : <CircularProgress size={24} />, name: 'Refresh leaderboard',
      callback: async () => {
        if (leaderboardLoading) return;
        setLeaderboardLoading(true);
        await axiosHelper.request("/events/refreshLeaderboard", "PUT", { current: true });
        setLeaderboardLoading(false);
        setTimeout(() => window.location.reload(), 3000);
      }
    },
    {
      icon: !endEventLoading ? <PowerSettingsNewIcon /> : <CircularProgress size={24} />, name: 'End event',
      callback: async () => {
        if (endEventLoading) return;
        setEndEventLoading(true);
        await axiosHelper.request("/events/endEvent", "PUT");
        setEndEventLoading(false);
        setTimeout(() => window.location.reload(), 3000);
      }
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 70, right: 25 }}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      open={open}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          onClick={action.callback}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}

export default AdminMenu