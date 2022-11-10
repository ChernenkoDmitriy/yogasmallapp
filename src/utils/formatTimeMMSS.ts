const addZero = (time: number) => {
    if (time > 9) {
        return time;
    } else if (time >= 0) {
        return `0${time}`;
    } else {
        return '00';
    }
};

export const formatTimeMMSS = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${addZero(minutes)}:${addZero(seconds)}`;
};

