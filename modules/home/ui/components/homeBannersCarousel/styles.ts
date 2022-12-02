import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { scaleVertical, Utils } from '../../../../../src/utils/Utils';

export const getStyle = (_colors: IColors) => {
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
            marginTop: scaleVertical(20),
            alignSelf: 'center',
        }
    });
    return styles;
}
