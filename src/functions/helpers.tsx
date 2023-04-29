export const createDurationString = (duration: number) => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60) % 60;
  const hours = Math.floor(duration / 3600);

  const secondsString = ('  ' + seconds.toString()).slice(-3) + 's';
  const minutesString = ('  ' + minutes.toString()).slice(-3) + 'm';
  const hoursString = ('            ' + hours.toString()).slice(-10) + 'h';

  return hoursString + minutesString + secondsString;
};

export const createDistanceString = (distance: number) => {
  const meters = Math.floor(distance % 1000);
  const kilometers = Math.floor(distance / 1000);
  return kilometers === 0 ? meters + 'm' : kilometers + 'km ' + meters + 'm';
};
