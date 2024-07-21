import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import AlertStore from '../store/AlertStore';
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
    icon: <PowerSettingsNewIcon />, name: 'End event',
    callback: () => axiosHelper.request("/events/endEvent", "PUT")
  },
];

const AdminMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'absolute', bottom: 75, right: 20 }}
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