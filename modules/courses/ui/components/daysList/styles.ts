import { StyleSheet } from 'react-native';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (isAvailable: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        flatListContainer: {
            paddingHorizontal: scaleHorizontal(20),
            paddingBottom: scaleVertical(23),
            opacity: isAvailable ? 1 : 0.5,
        },
        separator: {
            height: scaleVertical(16),
        }
    });
    return styles;
};