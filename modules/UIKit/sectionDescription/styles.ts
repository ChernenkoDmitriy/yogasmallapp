import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical, scaleFontSize } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: scaleHorizontal(20),
            paddingBottom: scaleVertical(23)
        },
        title: {
            ...FONTS.TITLE_18,
            color: colors.regularText,
        },
        subText: {
            ...FONTS.TEXT_REGULAR_16,
            lineHeight: scaleFontSize(20),
            color: colors.regularText,
            marginTop: scaleVertical(10),
        },
    });
    return styles;
};