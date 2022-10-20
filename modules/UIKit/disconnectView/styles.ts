import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { scaleFontSize, Utils } from '../../../src/utils/Utils'

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: Utils.size.height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
        text: {
            fontSize: scaleFontSize(22),
            fontWeight: '700',
            color: colors.regularText,
        },
    });
    return styles;
}
