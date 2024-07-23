
import { Alert, Snackbar } from '@mui/material'
import AlertStore from '../store/AlertStore'
import { observer } from 'mobx-react-lite'

const AlertMessage = observer(() => {
  return (
    <Snackbar open={AlertStore.message != ''} anchorOrigin={{horizontal: "right", vertical: "top"}}
     onClose={AlertStore.closeAlert} autoHideDuration={AlertStore.timeout}>
  <Alert
    sx={{fontFamily: "ComicSansMS"}}
    onClose={AlertStore.closeAlert}
    severity={AlertStore.severity}
    variant="filled"
  >
    {AlertStore.message}
  </Alert>
</Snackbar>
  )
})

export default AlertMessage