export default function Duration({ value }: { value: number }) {
  let seconds: string | number = value / 1000;
  let hours: string | number = Math.floor(seconds / 3600);
  let minutes: string | number = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;

  seconds = false ?
    Math.round(+seconds * 10) / 10 :
    Math.round(seconds);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return (
    <code>
      {`${hours === '00' ? '' : `${hours}:`}${minutes}:${seconds}`}
    </code>
  );
}
