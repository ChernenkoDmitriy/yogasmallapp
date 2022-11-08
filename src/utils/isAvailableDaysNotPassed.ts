const ONE_DAY = 1000 * 60 * 60 * 24;

const calculateDiffInDays = (date: Date, todayDate: Date) => {
    const diffInTime = todayDate.getTime() - date.getTime();
    return Math.round(diffInTime / ONE_DAY);
}

const calculateIsStarted = (date: Date, todayDate: Date) => {
    const diffInTime = todayDate.getTime() - date.getTime();
    return (diffInTime / ONE_DAY) >= 0;
}

export const isAvailableDaysNotPassed = (startDate: string, availableDays: number) => {
    const date = new Date(startDate);
    const todayDate = new Date();
    const diffInDays = calculateDiffInDays(date, todayDate);
    const isStarted = calculateIsStarted(date, todayDate);
    return isStarted && (availableDays >= diffInDays);
}