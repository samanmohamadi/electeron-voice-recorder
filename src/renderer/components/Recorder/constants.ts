import { createContext } from 'react';

import RecorderContextType from './types/recorder-context';

// eslint-disable-next-line import/prefer-default-export
export const RecorderContext = createContext<{
  recorder: RecorderContextType,
  playerRef: any,
}>({
  recorder: {
    isRecording: false,
    start: () => { },
    stop: () => { },
    reset: () => { },
    audioURL: '',
    duration: 0,
  },
  playerRef: {},
});
