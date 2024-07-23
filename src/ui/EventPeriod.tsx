

import { Box, Step, StepIconProps, StepLabel, Stepper, styled, Typography } from '@mui/material'
import React from 'react'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Check } from '@mui/icons-material';
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