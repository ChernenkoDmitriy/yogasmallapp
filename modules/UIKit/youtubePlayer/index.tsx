import React, { FC, useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { Linking, View, ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';
import { Utils } from '../../../src/utils/Utils';
import { useAppState } from '@react-native-community/hooks'
import Orientation from 'react-native-orientation-locker';
import { useSafeState } from '../../../src/hooks/useSafeState';

const { isIOS } = Utils;

interface IProps {
    containerStyle?: ViewStyle;
    videoIdOrLink: string;
    isPaused?: boolean;
    isPlayed?: boolean;
}

export const YoutubePlayer: FC<IProps> = ({ containerStyle, videoIdOrLink, isPaused, isPlayed, }) => {
    const webView = useRef<WebView | null>();
    const [isHardWareAccelerated, setIsHardWareAccelerated] = useState(true);
    const [key, setKey] = useState(0);
    const [isFullScreen, setIsFullScreen] = useSafeState(false);

    const uri = useMemo(() => {
        let id = videoIdOrLink;
        if (videoIdOrLink?.includes('https://')) {
            const youtubeIdRegex = (/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/m);
            id = videoIdOrLink.match(youtubeIdRegex)?.[5] || '';
            return `https://www.youtube.com/embed/${id}?rel=0&autoplay=0&fs=1&controls=1&modestbranding=1&playsinline=1&fullscreen=1`;
        }
        return `https://www.youtube.com/embed/${id}?rel=0&autoplay=0&fs=1&controls=1&modestbranding=1&playsinline=1&fullscreen=1`;
    }, [videoIdOrLink])

    const playVideo = `
        setTimeout(() => {
            document.getElementsByTagName("video")[0].play();
        }, 100);
    `;
    const pauseVideo = `
        setTimeout(() => {
            document.getElementsByTagName("video")[0].pause();
        }, 100);
    `;
    const exitFullscreen = `
        setTimeout(() => {
            document.getElementsByTagName("video")[0].webkitExitFullscreen();
        }, 100);
    `;

    useFocusEffect(useCallback(() => () => {
        webView?.current?.injectJavaScript(pauseVideo);
    }, []));

    useEffect(() => {
        setTimeout(() => {
            setIsHardWareAccelerated(false);
            setKey(key + 1);
        }, 0);

        return () => {
            setIsHardWareAccelerated(true);
            webView?.current?.injectJavaScript(pauseVideo);
        };
    }, []);


    useEffect(() => {
        if (!Utils.isIOS && isFullScreen) {
            Orientation.unlockAllOrientations();
        } else if (!Utils.isIOS) {
            Orientation.lockToPortrait();
        }
    }, [isFullScreen]);

    const injected = `["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach(
        eventType =>
            document.addEventListener(eventType, function (e) {
                window.ReactNativeWebView.postMessage(eventType)
            }, false)); true;`;

    return (
        <View key={key} style={[{ width: 320, height: 200, alignSelf: 'center' }, containerStyle]}>
            <WebView
                injectedJavaScript={injected}
                onMessage={(event: any) => {
                    const data = event.nativeEvent.data;
                    if (data === 'fullscreenchange') {
                        setIsFullScreen(prev => !prev)
                    }
                }}
                key={key}
                style={{ width: '100%', height: '100%' }}
                ref={ref => webView.current = ref}
                domStorageEnabled={true}
                userAgent={isIOS ? undefined : "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36"}
                javaScriptEnabled={true}
                androidHardwareAccelerationDisabled={isHardWareAccelerated}
                mediaPlaybackRequiresUserAction={true}
                allowsFullscreenVideo={true}
                automaticallyAdjustContentInsets={true}
                allowsInlineMediaPlayback={true}
                source={{ uri }}
                onNavigationStateChange={(event) => {
                    if (event.url !== uri) {
                        webView?.current?.stopLoading();
                        Linking.openURL(event.url);
                    }
                }}
            />
        </View>
    );
};
