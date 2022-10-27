import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleVertical, Utils } from '../../../src/utils/Utils'

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: Utils.size.height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
        backgroundImage: {
            position: 'absolute',
            height: Utils.size.height - scaleVertical(100),
            width: Utils.size.width,
        },
        text: {
            ...FONTS.TITLE_34,
            color: colors.focusedTab,
        },
    });
    return styles;
}
