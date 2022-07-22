import { Box } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { RecorderContext } from '../constants';

export default function WaveAudio() {
  const containerRef = useRef();
  const { recorder: { audioURL }, playerRef } = useContext(RecorderContext);

  useEffect(() => {
    playerRef.current = WaveSurfer.create({
      container: containerRef.current || '',
      waveColor: '#fff',
      interact: false,
      hideScrollbar: true,
      progressColor: '#060606',
      barWidth: 3,
      barHeight: 3,
      cursorWidth: 1,
      height: 80,
      barRadius: 4,
    });
    // TODO: destroy wavesurfer instance
  }, []);


  useEffect(() => {
    if (!audioURL) {
      playerRef.current?.empty?.()
      return;
    }
    playerRef.current?.load?.(audioURL);
  }, [audioURL])


  return (
    <Box style={{
      display: audioURL ? 'block' : 'none',
      width: '100%'
    }}>
      <Box ref={containerRef} sx={{
        opacity: 0.2,
        height: 100,
      }} />
    </Box>
  )
}
