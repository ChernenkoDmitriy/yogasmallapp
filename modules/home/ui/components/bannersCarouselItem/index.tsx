import React, { FC, useCallback, useMemo } from 'react';
import { Image, TouchableOpacity, Linking } from 'react-native';
import { getStyle } from './styles';
import { IBanner } from '../../../../entities/banner/IBanner';

interface IProps {
    item: IBanner;
};

export const BannersCarouselItem: FC<IProps> = ({ item }) => {
    const { image, link } = item;
    const styles = useMemo(() => getStyle(), []);

    const onOpenLink = useCallback(async () => { link && await Linking.canOpenURL(link) && await Linking.openURL(link) }, [link]);

    return (
        <TouchableOpacity style={styles.container} onPress={onOpenLink}>
            <Image style={styles.image} source={{ uri: image }} resizeMode={'cover'}/>
        </TouchableOpacity>
    );
};
