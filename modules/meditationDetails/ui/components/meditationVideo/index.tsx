import React, { FC, memo, MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Text, View, Image, Dimensions, Platform } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { ClockIcon } from '../../../../../assets/icons/clockIcon';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import YoutubeIframe from 'react-native-youtube-iframe';
import { scaleVertical, Utils } from '../../../../../src/utils/Utils';
import { WebView } from 'react-native-webview';

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
    isSeek: boolean;
    isAvailable: boolean;
    setCurrentTime: (value: number) => void;
    setDuration: (value: number) => void;
};



export const MeditationVideo: FC<IProps> = memo(({ title, banner, duration, durationMeasuring, media, mediaRef, isPaused, isSeek, isAvailable, setCurrentTime, setDuration }) => {
    const [showPlayer, setShowPlayer] = useState(false);
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, !!banner || media.type === 'video'), [colors, banner, media, isPaused]);
    const videoStyle = useMemo(() => media.type === 'audio' || isPaused ? { height: 0 } : styles.video, [media, styles]);
    const [playing, setPlaying] = useState(true);
    const playerRef = useRef();


    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    console.log(isAvailable);
    useEffect(() => {
        setTimeout(() => { setShowPlayer(true) }, 600);
    }, []);

    const currentMedia = useMemo(() => {
        if (!media.uri) {
            return media.type === 'audio'
                ? { uri: DEFAULT_AUDIO, type: media.type }
                : { uri: DEFAULT_VIDEO, type: media.type };
        } else {
            return media;
        };
    }, [media]);

    const onProgress = ({ currentTime }: OnProgressData) => { !isSeek && setCurrentTime(currentTime) };
    const onLoad = ({ duration }: OnLoadData) => { setDuration(duration) };
    const onError = (error: any) => { console.warn('MeditationHeader -> Video: ', error) };

    return (
        <View style={styles.container}>
            <View style={[styles.mediaWrapper]}>
                {!isAvailable
                    ? <Image source={banner ? { uri: banner } : IMAGE} style={styles.image} resizeMode={'cover'} />
                    : media.type === 'audio' ? <Image source={banner ? { uri: banner } : IMAGE} style={styles.image} resizeMode={'cover'} />
                        :<YoutubeIframe
                        height={scaleVertical(250)}
                        width={Utils.size.width}
                        play={false}
                        videoId={'7nFbWyb1qww'}
                        webViewStyle={{ opacity: 0.99 }}
                    />
                        // <WebView
                        //     source={{ uri: 'https://www.youtube.com/watch?v=Cs8U96_U_Dk' }}
                        //     containerStyle={{width:'100%', height:'100%'}}
                        //     domStorageEnabled={true}
                        //     mediaPlaybackRequiresUserAction={true}
                        //     allowsFullscreenVideo={true}
                        //     automaticallyAdjustContentInsets={true}
                        //     allowsInlineMediaPlayback={true}/>
                }
                {showPlayer &&
                    <View>
                        <Video
                            ref={ref => mediaRef.current = ref}
                            source={currentMedia}
                            paused={isPaused}
                            repeat={true}
                            onProgress={onProgress}
                            onLoad={onLoad}
                            onError={onError}
                            style={{ height: 0 }}
                            resizeMode={'contain'}
                            playWhenInactive={true}
                            playInBackground={true}
                            ignoreSilentSwitch={'ignore'}
                        /></View>}
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.timeWrapper}>
                <ClockIcon />
                <Text style={styles.timeText}>{`${duration} ${durationMeasuring}`}</Text>
            </View>
        </View>
    )
});