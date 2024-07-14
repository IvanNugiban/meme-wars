import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#0567DE',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#FFFFFF'
        }
      },
      shape: {
        borderRadius: 8,
      },
})

export default theme;