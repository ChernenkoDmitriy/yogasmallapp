import React, { FC, memo, useEffect, useMemo, useRef } from 'react';
import Video, { OnPlaybackRateData } from 'react-native-video';
import { useIsFocused } from '@react-navigation/core';
import Orientation from 'react-native-orientation-locker';
import { useUiContext } from '../../../src/UIProvider';
import { Utils } from '../../../src/utils/Utils';
import { useSafeState } from '../../../src/hooks/useSafeState';
import { getStyle } from './style';
import { TouchableOpacity, View, Text } from 'react-native';

interface IProps {
    uri: string;
};

export const VideoPlayer: FC<IProps> = ({ uri }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const player = useRef<Video | null>();
    const [paused, setPaused] = useSafeState(true);
    const isFocused = useIsFocused();
    const [isFullScreen, setIsFullScreen] = useSafeState(false);

    useEffect(() => {
        if (!isFocused) {
            setPaused(true);
        }
    }, [isFocused]);

    useEffect(() => {
        if (!Utils.isIOS && isFullScreen) {
            Orientation.unlockAllOrientations();
        } else if (!Utils.isIOS) {
            Orientation.lockToPortrait();
        }
    }, [isFullScreen]);

    const onPlaybackRateChange = (data: OnPlaybackRateData) => {
        setPaused(!data.playbackRate);
    };

    return (
        <View style={styles.container}>
            <Video
                onError={console.log}
                onFullscreenPlayerDidPresent={() => { setIsFullScreen(true) }}
                onFullscreenPlayerWillPresent={() => { setIsFullScreen(true) }}
                onFullscreenPlayerWillDismiss={() => { setIsFullScreen(false) }}
                paused={paused}
                source={{ uri: uri }}
                focusable
                controls={true}
                fullscreenOrientation='all'
                playInBackground={false}
                ref={(ref) => { player.current = ref }}
                style={{ width: '100%', height: '100%' }}
                repeat={false}
                disableFocus={false}
                playWhenInactive={false}
                ignoreSilentSwitch={'ignore'}
                onPlaybackRateChange={onPlaybackRateChange}
            />
        </View>
    );
};