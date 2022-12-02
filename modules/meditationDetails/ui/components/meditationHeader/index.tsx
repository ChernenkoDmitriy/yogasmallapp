import React, { FC, MutableRefObject, useEffect, useMemo, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { ClockIcon } from '../../../../../assets/icons/clockIcon';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';

const IMAGE = require('../../../../../assets/icons/goldOrnament.png');
const DEFAULT_VIDEO = 'https://ta-samaya.github.io/TA.SAMAYA-DATA/media/video/defaultVideo.mp4';
const DEFAULT_AUDIO = 'https://ta-samaya.github.io/TA.SAMAYA-DATA/media/audio/defaultAudio.mp3';

interface IProps {
    title?: string;
    banner?: string;
    duration?: number;
    durationMeasuring?: string;
    media: { uri: string; type: 'audio' | 'video' };
    mediaRef: MutableRefObject<Video | null>;
    isPaused: boolean;
    setCurrentTime: (value: number) => void;
    setDuration: (value: number) => void;
};

export const MeditationHeader: FC<IProps> = ({ title, banner, duration, durationMeasuring, media, mediaRef, isPaused, setCurrentTime, setDuration }) => {
    const [showPlayer, setShowPlayer] = useState(false)
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, !!banner || media.type === 'video'), [colors, banner, media, isPaused]);
    const videoStyle = useMemo(() => media.type === 'audio' || isPaused ? { height: 0 } : styles.video, [media, styles]);

    useEffect(() => {
        setTimeout(() => { setShowPlayer(true) }, 600)
    }, [])

    const currentMedia = useMemo(() => {
        if (!media.uri) {
            return media.type === 'audio'
                ? { uri: DEFAULT_AUDIO, type: media.type }
                : { uri: DEFAULT_VIDEO, type: media.type };
        } else {
            return media;
        };
    }, [media]);

    const onProgress = ({ currentTime }: OnProgressData) => { setCurrentTime(currentTime) };
    const onLoad = ({ duration }: OnLoadData) => { setDuration(duration) };
    const onError = (error: any) => { console.warn('MeditationHeader -> Video: ', error) };

    return (
        <View style={styles.container}>
            <View style={styles.mediaWrapper}>
                {(media.type === 'audio' || isPaused) && <Image source={banner ? { uri: banner } : IMAGE} style={styles.image} resizeMode={'cover'} />}
                {showPlayer && <Video
                    ref={ref => mediaRef.current = ref}
                    source={currentMedia}
                    paused={isPaused}
                    repeat={true}
                    onProgress={onProgress}
                    onLoad={onLoad}
                    onError={onError}
                    style={videoStyle}
                    resizeMode={'contain'}
                    playWhenInactive={true}
                    playInBackground={true}
                    ignoreSilentSwitch='ignore'
                />}
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.timeWrapper}>
                <ClockIcon />
                <Text style={styles.timeText}>{`${duration} ${durationMeasuring}`}</Text>
            </View>
        </View>
    )
};