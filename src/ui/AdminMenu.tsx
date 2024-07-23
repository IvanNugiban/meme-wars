import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react';
import axiosHelper from '../utils/axiosHelper';

const actions = [
  {
    icon: <AddAlarmIcon />, name: 'Add entries for next event',
    callback: () => axiosHelper.request("/entries/addTest", "POST", {current: false})
  },
  {
    icon: <AddAPhotoIcon />, name: 'Add entries for current event',
    callback: () => axiosHelper.request("/entries/addTest", "POST", {current: true})
  },
  {
    icon: <RefreshIcon />, name: 'Refresh leaderboard',
    callback: async () => {
      await axiosHelper.request("/events/refreshLeaderboard", "PUT", {current: true});
      window.location.reload();
    }
  },
  {
    icon: <PowerSettingsNewIcon />, name: 'End event',
    callback: async () => {
     await axiosHelper.request("/events/endEvent", "PUT");
     window.location.reload();
    }
  },
];

const AdminMenu = () => {

  const [open, setOpen] = useState(false);

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
          onClick={() => {
            action.callback();
            setOpen(false)
          }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}

export default AdminMenu