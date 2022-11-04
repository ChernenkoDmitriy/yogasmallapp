import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical, Utils } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.background,
        },
        settingsBlock: {
            flexDirection: 'row',
            justifyContent:'space-between',
            width: Utils.size.width,
            paddingHorizontal: scaleHorizontal(16),
            marginTop: scaleVertical(40),
        },
        settingsTitle: {
            ...FONTS.TITLE_18,
            color: colors.regularText
        },
        localeText: {
            ...FONTS.TITLE_18,
            color: colors.regularText,
            textTransform: 'uppercase',
        },
        logoutButton: {
            width: scaleHorizontal(374),
            marginBottom: scaleVertical(24),
        },
    });
    return styles;
}
