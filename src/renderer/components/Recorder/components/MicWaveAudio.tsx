import { Box } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

// @ts-ignore
import Microphone from 'wavesurfer.js/dist/plugin/wavesurfer.microphone';
import { RecorderContext } from '../constants';


export default function MicWaveAudio() {
  const containerRef = useRef();
  const { recorder: { isRecording } } = useContext(RecorderContext);
  const instanceRef = useRef<any>();

  useEffect(() => {
    // Todo: use one stream for recording and visualization
    instanceRef.current = WaveSurfer.create({
      container: containerRef.current || '',
      waveColor: '#fff',
      interact: false,
      cursorWidth: 0,
      plugins: [
        Microphone.create()
      ]
    });
    // TODO: destroy wavesurfer instance
  }, []);

  useEffect(() => {
    if (!isRecording) {
      instanceRef.current?.microphone?.stop?.();
      return;
    }
    instanceRef.current?.microphone?.start?.();
  }, [isRecording])

  return (
    <Box ref={containerRef} sx={{
      display: isRecording ? 'block' : 'none',
      transform: 'scale(2)',
      opacity: 0.8,
      width: '100%'
    }} />

  )

}
