import { StyleSheet } from 'react-native';
import { scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            paddingBottom: scaleVertical(23),
        },
        separator:{
            height: scaleVertical(23),
        }
    });
    return styles;
};