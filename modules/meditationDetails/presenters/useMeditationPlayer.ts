import { useRoute } from "@react-navigation/native";
import { useCallback, useMemo, useRef, useState } from "react";
import { IMeditation } from "../../entities/meditation/IMeditation";
import Video from 'react-native-video';
import { formatTimeMMSS } from "../../../src/utils/formatTimeMMSS";
import { IRouteParams } from "../../../src/navigation/stackNavigators/meditationStackNavigator";

const DEFAULT_ITEM: IMeditation = {
    id: -1,
    accessCode: [],
    title: '',
    duration: 0,
    durationMeasuring: 'minutes',
    lessonTitle: '',
    lessonContent: [],
    media: { uri: '', type: 'audio' },
    description: "",
    availableDays: 0,
    startDate: "2022-11-09",
    isAvailable: false,
    banner: ''
};

export const useMeditationPlayer = () => {
    const { item } = useRoute().params as IRouteParams;
    const { title, duration, durationMeasuring, media, banner } = item || DEFAULT_ITEM;

    const mediaRef = useRef<Video | null>(null);
    const [isPaused, setIsPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [mediaDuration, setMediaDuration] = useState(0);

    const timeLeft = useMemo(() => formatTimeMMSS(Math.floor(mediaDuration - currentTime)), [mediaDuration, currentTime]);
    const [isSeek, setIsSeek] = useState(false);

    const onMediaValueChange = useCallback((value: number | Array<number>) => {
        if (Array.isArray(value) && mediaDuration && (typeof value[0] === 'number')) {
            setCurrentTime(value[0] * mediaDuration);
            mediaRef.current?.seek(value[0] * mediaDuration);
        } else if (typeof value === 'number' && mediaDuration) {
            setCurrentTime(value * mediaDuration);
            mediaRef.current?.seek(value * mediaDuration);
        };
    }, [mediaDuration]);

    const onSetIsPaused = () => { setIsPaused(prevState => !prevState) };

    const onSlidingComplete = (value: number | Array<number>) => {
        onMediaValueChange(value);
        setTimeout(() => { setIsSeek(false) }, 500);
    };

    const onSlidingStart = () => { setIsSeek(true) };

    const onValueChange = (value: number | Array<number>) => {
        if (Array.isArray(value) && mediaDuration && (typeof value[0] === 'number')) {
            setCurrentTime(value[0] * mediaDuration);
        } else if (typeof value === 'number' && mediaDuration) {
            setCurrentTime(value * mediaDuration);
        };
    };

    return {
        title, duration, durationMeasuring, media, banner,
        mediaRef, isPaused, currentTime, mediaDuration, setCurrentTime, setMediaDuration,
        onSetIsPaused, onSlidingComplete, onSlidingStart, onValueChange,
        timeLeft, isSeek
    };
}