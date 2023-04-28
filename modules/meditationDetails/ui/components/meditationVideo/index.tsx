import React, { FC, memo, MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { ClockIcon } from '../../../../../assets/icons/clockIcon';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import { scaleHorizontal, scaleVertical, Utils } from '../../../../../src/utils/Utils';
import WabView, { WebView } from 'react-native-webview'
import { YoutubePlayer } from '../../../../UIKit/youtubePlayer';
import { VideoPlayer } from '../../../../UIKit/VideoPlayer';

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

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

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

    const urlProp = 'https://www.youtube.com/watch?v=l3zipB6nek8&t=517s';

    const uri = useMemo(() => {
        let videoId = urlProp;
        if (videoId?.includes('https://')) {
            const youtubeIdRegex = (
                /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/m
            );
            videoId = urlProp.match(youtubeIdRegex)?.[5] || '';
        }
        return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0&fs=1&controls=1&modestbranding=1&playsinline=1&fullscreen=1`;
    }, [urlProp])

    const webView = useRef<WebView | null>();
    const exitFullscreen = `
        setTimeout(() => {
            document.getElementsByTagName("video")[0].webkitExitFullscreen();
        }, 100);
    `;

    useEffect(() => {
        setTimeout(() => {
            webView?.current?.injectJavaScript(exitFullscreen);
        }, 1000)
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.mediaWrapper]}>
                <Image source={IMAGE} style={{ position: 'absolute', zIndex: -1, width: scaleHorizontal(180), height: scaleVertical(180) }} />
                {!isAvailable
                    ? <Image source={banner ? { uri: banner } : IMAGE} style={styles.image} resizeMode={'cover'} />
                    : media.type === 'audio' ? <Image source={banner ? { uri: banner } : IMAGE} style={styles.image} resizeMode={'cover'} />
                        : <View style={{ paddingHorizontal: 20, width: 360, height: 200 }}>
                            {/* <WabView
                                ref={ref => webView.current = ref}
                                domStorageEnabled={true}
                                userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 
                                (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                                javaScriptEnabled={true}
                                androidHardwareAccelerationDisabled={true}
                                mediaPlaybackRequiresUserAction={false}
                                allowsFullscreenVideo={true}
                                automaticallyAdjustContentInsets={true}
                                allowsInlineMediaPlayback={true}
                                scrollEnabled={false}
                                source={{ uri }}
                            /> */}
                            <YoutubePlayer videoIdOrLink={'https://www.youtube.com/watch?v=l3zipB6nek8&t=517s'} />
                            </View>
                    //     <YoutubeIframe
                    //     height={scaleVertical(250)}
                    //     width={Utils.size.width}
                    //     play={false}
                    //     videoId={'7nFbWyb1qww'}
                    //     webViewStyle={{ opacity: 0.99 }}
                    // />
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