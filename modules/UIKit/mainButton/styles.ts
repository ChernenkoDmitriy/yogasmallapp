import { StyleSheet } from 'react-native';
import { scaleVertical } from '../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            height: scaleVertical(54),
            borderRadius: 16,
        },
        absoluteSheet: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}
