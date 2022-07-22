import { Fab } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayIcon from '@mui/icons-material/PlayArrow';

import { RecorderContext } from '../../../constants';

export default function PlayPauseButton(props: any) {
  const { recorder: { audioURL }, playerRef } = useContext(RecorderContext) || {};
  const [isPlaying, setIsPaying] = useState<Boolean>(false);

  useEffect(() => {
    playerRef.current.on('play', () => setIsPaying(true));
    playerRef.current.on('pause', () => setIsPaying(false));
  }, [playerRef]);

  if (!audioURL) {
    return null;
  }

  function handleClick() {
    console.log(playerRef.current);
    playerRef.current.playPause();
  }

  return (
    <Fab role="play-pause" onClick={handleClick} {...props}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </Fab>
  );
}
