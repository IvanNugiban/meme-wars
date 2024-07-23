import { Typography } from '@mui/material';
import moment from 'moment';

interface IProps {
  startDate: Date,
  endDate: Date
}


const EventPeriod = ({ startDate, endDate }: IProps) => {

  return (
    <Typography color="#e4e5e5" fontSize="0.9em">
      {moment(startDate).utc().format("MMM. DD hh:mm A [(UTC)]")} - {moment(endDate).utc().format("MMM. DD hh:mm A [(UTC)]")}
    </Typography>
  )
}

export default EventPeriod