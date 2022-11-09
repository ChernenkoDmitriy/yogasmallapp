import { StyleSheet } from 'react-native';
import { scaleVertical, Utils } from '../../../../../src/utils/Utils';

export const getStyle = (indicatorWidth: number) => {
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
            width: indicatorWidth,
            marginTop: scaleVertical(20),
            alignSelf: 'center',
        }
    });
    return styles;
}
