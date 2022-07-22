import { Fab } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import Duration from 'renderer/components/Recorder/components/Duration';
import { useContext } from 'react';
import { RecorderContext } from 'renderer/components/Recorder/constants';

export default function StopButton(props: any) {
  const { recorder: { duration, stop } } = useContext(RecorderContext) || {};

  return <Fab
    role="stop"
    color='error'
    variant='extended'
    onClick={stop}
    {...props}
  >
    <StopIcon />
    <Duration value={duration} />
  </Fab>
}
