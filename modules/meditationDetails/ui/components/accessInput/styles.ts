import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: scaleVertical(20),
            marginBottom: scaleVertical(27),
        },
        inputWrapper: {
            width: '100%',
            height: scaleVertical(44),
            borderRadius: 8,
            marginTop: scaleVertical(10),
            paddingHorizontal: scaleHorizontal(16),
            backgroundColor: colors.blockBackground,
        },
        input: {
            flex: 1,
            ...FONTS.TEXT_REGULAR_16,
            color: colors.regularText,
        },
        title: {
            ...FONTS.ADDITIONAL_TEXT_14,
            color: colors.subText,
            textAlign: 'center',
        },
        button: {
            width: '100%',
            marginTop: scaleVertical(24)
        }
    });
    return styles;
}
