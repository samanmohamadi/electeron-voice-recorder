import { DialogActions, DialogContent, DialogContentText, DialogTitle, Fab } from '@mui/material';
import { useContext, useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import { RecorderContext } from '../../../constants';

// start the microphone
export default function ResetButton(props: any) {
  const { recorder: { reset } } = useContext(RecorderContext);
  const [open, setOpen] = useState(false);

  function handleReset() {
    setOpen(false);
    reset();
  }
  function handleCloseDialog() {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
      >
        <DialogTitle >
          Clear recorded voice?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you clear the voice there is no way to recover it, clear now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleReset}
            color="primary" autoFocus
            variant="contained"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Fab role="reset"  onClick={() => setOpen(true)} {...props}>
        <RestartAltIcon />
      </Fab>
    </>
  )
}
