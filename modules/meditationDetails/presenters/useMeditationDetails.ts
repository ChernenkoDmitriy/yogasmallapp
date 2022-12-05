import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useRef, useState } from "react";
import { IMeditation } from "../../entities/meditation/IMeditation";
import { meditationModel } from "../../entities/meditation/MeditationModel";
import { useAvailability } from "../../../libs/hooks/useAvailability";
import Video from 'react-native-video';

const DEFAULT_ITEM: IMeditation = {
    id: -1,
    accessCode: '',
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

interface IRouteParams {
    item: IMeditation | null,
    prevScreen: string,
};

export const useMeditationDetails = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { item, prevScreen } = useRoute().params as IRouteParams;
    const { id, accessCode, title, duration, durationMeasuring, lessonTitle, lessonContent, media, banner } = item || DEFAULT_ITEM;

    const mediaRef = useRef<Video | null>(null);
    const [isPaused, setIsPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [mediaDuration, setMediaDuration] = useState(0);

    const { code, setCode, isAvailable, onGetAccess } = useAvailability(meditationModel, accessCode, id);

    const onGoBack = useCallback(() => {
        if (prevScreen) {
            navigation.navigate(prevScreen);
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        };
    }, [prevScreen]);

    const onMediaValueChange = useCallback((value: number | Array<number>) => {
        if (Array.isArray(value) && mediaDuration && (typeof value[0] === 'number')) {
            mediaRef.current?.seek(value[0] * mediaDuration);
        } else if (typeof value === 'number' && mediaDuration) {
            mediaRef.current?.seek(value * mediaDuration);
        };
    }, [mediaDuration]);

    const onSetIsPaused = () => { setIsPaused(prevState => !prevState) };

    return {
        title, duration, durationMeasuring, lessonTitle, lessonContent, media, banner,
        code, setCode, isAvailable, onGetAccess, onGoBack,
        mediaRef, isPaused, currentTime, setCurrentTime, mediaDuration,
        setMediaDuration, onMediaValueChange, onSetIsPaused
    };
}