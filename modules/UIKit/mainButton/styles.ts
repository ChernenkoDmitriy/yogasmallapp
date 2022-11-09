import { StyleSheet } from 'react-native';
import { scaleHorizontal } from '../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            height: scaleHorizontal(54),
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
