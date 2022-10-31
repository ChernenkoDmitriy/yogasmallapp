import { StyleSheet } from 'react-native';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: scaleHorizontal(20),
            paddingBottom: scaleVertical(23),
        },
        separator: {
            height: scaleVertical(16),
        }
    });
    return styles;
};