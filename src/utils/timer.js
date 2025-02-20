export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  export const calculateTimeLeft = (startTime, duration) => {
    const now = new Date().getTime();
    const timeElapsed = Math.floor((now - startTime) / 1000);
    return Math.max(0, duration - timeElapsed);
  };