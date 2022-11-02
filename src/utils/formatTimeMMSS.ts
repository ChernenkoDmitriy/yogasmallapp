const addZero = (time: number) => {
    if (time > 9) {
        return time;
    } else {
        return `0${time}`;
    }
};

export const formatTimeMMSS = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${addZero(minutes)}:${addZero(seconds)}`;
};

