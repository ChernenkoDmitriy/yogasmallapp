import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
        },
        backgroundImage: {
            position: 'absolute',
            height: scaleVertical(630),
            width: scaleVertical(330),
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
            marginBottom: scaleVertical(25),
            paddingHorizontal: scaleHorizontal(37),
        },
        tip: {
            ...FONTS.ADDITIONAL_TEXT_12,
            color: colors.additionalText,
            textAlign: 'center',
            paddingHorizontal: scaleHorizontal(37),
        },
        authButtonWrapper: {
            marginBottom: scaleVertical(57),
            marginHorizontal: scaleHorizontal(20),
        },
    });
    return styles;
}
