
import React, { useEffect, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const TabBarButton = styled(BottomNavigationAction)({
    color: "#191919",
    '&.Mui-selected': {
      color: 'white',
    },
  });

const Footer = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    useEffect(() => {
        navigate(value === 0 ? '/' : value === 1 ? '/submit' : '/leaderboard');
    }, [value]);

    return (
        <BottomNavigation
            sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, backgroundColor: "primary.main" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <TabBarButton  label="Vote" icon={<ThumbsUpDownIcon />} />
            <TabBarButton label="Participate" icon={<EmojiPeopleIcon />} />
            <TabBarButton label="Leaderboard" icon={<EmojiEventsIcon />} />
        </BottomNavigation>
    )
}

export default Footer