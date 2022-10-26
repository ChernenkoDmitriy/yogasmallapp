import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors, isError: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        backgroundImage: {
            position: 'absolute',
            top: scaleVertical(110),
            height: scaleVertical(630),
            width: scaleVertical(360),
        },
        contentWrapper: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: scaleVertical(111),
        },
        inputWrapper: {
            height: scaleVertical(100),
            justifyContent: 'space-between',
            marginTop: scaleVertical(23),
            paddingHorizontal: scaleHorizontal(20),
        },
        errorWrapper: {
            height: scaleVertical(25),
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: scaleHorizontal(57),
            marginTop: scaleVertical(5),
            borderRadius: 8,
            backgroundColor: colors.buttonGradientStart,
            opacity: isError ? 0.8 : 0,
        },
        errorText: {
            ...FONTS.ADDITIONAL_TEXT_14,
            color: colors.buttonGradientEnd,
        },
        tip: {
            ...FONTS.ADDITIONAL_TEXT_12,
            color: colors.regularText,
            textAlign: 'center',
            paddingHorizontal: scaleHorizontal(37),
        },
        authButtonWrapper: {
            marginTop: scaleVertical(20),
            marginBottom: scaleVertical(57),
            marginHorizontal: scaleHorizontal(20),
            backgroundColor:'gray',
        },
    });
    return styles;
}
