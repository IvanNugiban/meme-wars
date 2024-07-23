import { Button, TableCell, TableRow, TableRowProps } from '@mui/material'
import React from 'react'
import HotWalletIcon from '../icons/HotWalletIcon'
import IEntry from '../types/IEntry'
import { styled } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'

// Define your custom props
interface CustomTableRowProps extends TableRowProps {
    highlighted?: boolean;
}

// Extend TableRow with your custom props
const HighlightedTableRow = styled(TableRow, {
    shouldForwardProp: (prop) => prop !== 'highlighted',
})<CustomTableRowProps>(({ highlighted }) => ({
    backgroundColor: highlighted ? 'yellow' : 'inherit',
    cursor: 'pointer',
    transition: '0.5s all',
    '&:hover' : {
        backgroundColor: '#e4e5e5'
    }
}));

interface IProps {
    entry: IEntry;
    position: number;
    onClick: () => void;
    highlighted?: boolean;
}

const LeaderboardItem = ({ entry, position, onClick, highlighted = false }: IProps) => {
    return (
            <HighlightedTableRow onClick={onClick} key={entry.nearId} highlighted={highlighted}>
                <TableCell style={{ minWidth: '20px', maxWidth: '200px' }}>{position}</TableCell>
                <TableCell style={{ minWidth: '50px', maxWidth: '120px', textOverflow: "ellipsis", overflow: "hidden" }}>
                    {entry.nearId}
                </TableCell>
                <TableCell style={{ minWidth: '50px', maxWidth: '200px', display: "flex", alignItems: "center", gap: "10px", paddingLeft: "20px" }} >
                    {entry.reward > 0 ? <React.Fragment>
                        {entry.reward.toFixed(1)}
                        <HotWalletIcon />
                    </React.Fragment> : <React.Fragment>-</React.Fragment>}
                </TableCell>
            </HighlightedTableRow>
    )
}

export default LeaderboardItem