import { StyleSheet } from 'react-native';
import { scaleHorizontal, Utils } from '../../../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: Utils.size.width,
            height: '100%',
            alignItems:'center',
        },
        image: {
            width: Utils.size.width - scaleHorizontal(40),
            height: '100%',
            borderRadius: 16,
        },
    });
    return styles;
}
