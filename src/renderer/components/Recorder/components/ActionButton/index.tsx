import { useContext, useMemo } from 'react';
import { Box } from '@mui/system';

import { RecorderContext } from '../../constants';
import RecordButton from './components/RecordButton';
import PlayPauseButton from './components/PlayPauseButton';
import StopButton from './components/StopButton';
import ResetButton from './components/RestButton';

export default function ActionButton() {
  const {
    recorder: { isRecording, audioURL }
  } = useContext(RecorderContext);

  const Action = useMemo(() => {
    if (isRecording) {
      return StopButton;
    }
    if (audioURL) {
      return PlayPauseButton;
    }
    return RecordButton

  }, [isRecording, audioURL])

  return <Box sx={{ position: 'relative' }}>
    <Action sx={{
      transform: 'scale(4)',
      '&:hover': {
        transform: 'scale(4.2)'
      }
    }}
    />
    {audioURL && <ResetButton sx={{
      position: 'absolute',
      bottom: -90
    }} />}
  </Box>
}
