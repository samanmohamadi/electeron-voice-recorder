import { useEffect, useMemo, useRef, useState } from 'react';

import RecorderContextType from '../types/recorder-context';

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}

function useRecorder(): RecorderContextType {
  const [audioURL, setAudioURL] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const startAtRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();


  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder).catch(console.error);
      }
      return;
    }

    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    function handleData(e: any) {
      setAudioURL(URL.createObjectURL(e.data));
    };

    recorder.addEventListener('dataavailable', handleData);
    return () => recorder.removeEventListener('dataavailable', handleData);
  }, [recorder, isRecording]);

  function start() {
    startAtRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setDuration(Date.now() - startAtRef.current);
    }, 1000);
    setIsRecording(true);
    setAudioURL('');
  };

  function stop() {
    clearInterval(intervalRef.current);
    setDuration(0);
    setIsRecording(false);
  };

  function reset() {
    setAudioURL('')
  }

  return useMemo<RecorderContextType>(() => ({
    audioURL, isRecording, start, stop, duration, reset,
  }), [
    audioURL, isRecording, start, stop, duration, reset
  ]);
}

export default useRecorder;
