import { Fab } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { useContext } from 'react';

import { RecorderContext } from '../../../constants';

export default function RecordButton(props: any) {
  const {
    recorder: { start, }
  } = useContext(RecorderContext);
  return <Fab
    role="record"
    color="primary"
    onClick={start}
    {...props}
  >
    <MicIcon />
  </Fab>
}
