import { StyleSheet } from 'react-native';
import { scaleHorizontal, scaleVertical, Utils } from '../../../../../src/utils/Utils';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Utils.size.width,
            marginTop: scaleVertical(10),
        },
        indicatorsWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: scaleHorizontal(68),
            marginTop: scaleVertical(20),
            alignSelf: 'center',
        }
    });
    return styles;
}
