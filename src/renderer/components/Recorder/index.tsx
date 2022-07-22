import { Box } from '@mui/system';

import ContextProvider from './components/ContextProvider';
import WaveAudio from './components/WaveAudio';
import MicWaveAudio from './components/MicWaveAudio';
import ActionButton from './components/ActionButton';

export default function Recorder() {
  return (
    <ContextProvider>
      <Box sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        gap: 1
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 3,
        }}>
          <ActionButton />
        </Box>
        <Box sx={{
          flexGrow: 2,
          position: 'relative'
        }}>
          <Box sx={{
            width: '100%',
            position: 'absolute',
            left: 0, top: 0
          }}>
            <MicWaveAudio />
            <WaveAudio />
          </Box>
        </Box>
      </Box>
    </ContextProvider>
  );
}
