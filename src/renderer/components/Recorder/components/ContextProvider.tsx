import React, { useMemo, useRef } from 'react';

import { RecorderContext } from '../constants';
import useRecorder from '../hooks/use-recorder';

export default function ContextProvider({ children }: {
  children: React.ReactNode;
}) {
  const recorderContext = useRecorder();
  const playerRef = useRef();
  const value = useMemo(() => ({
    recorder: recorderContext,
    playerRef: playerRef,
  }), [recorderContext, playerRef])
  return (
    <RecorderContext.Provider value={value}>
      {children}
    </RecorderContext.Provider>
  );
}
