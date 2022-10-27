import { StyleSheet } from 'react-native';
import { scaleHorizontal, Utils } from '../../../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: Utils.size.width - scaleHorizontal(30),
            height: '100%',
            marginHorizontal: scaleHorizontal(15),
        },
        image: {
            flex: 1,
            borderRadius: 16,
        },
    });
    return styles;
}
