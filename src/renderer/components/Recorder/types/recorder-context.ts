export default interface RecorderContextType {
  duration: number;
  isRecording: boolean;
  audioURL: string;
  start: () => void;
  stop: () => void;
  reset: () => void;
}
