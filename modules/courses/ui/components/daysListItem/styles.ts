import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            width: scaleHorizontal(179),
            height: scaleHorizontal(179),
            marginRight: scaleHorizontal(16),
            paddingBottom: scaleVertical(14),
            backgroundColor: colors.blockBackground,
            borderRadius: 16,
        },
        dayWrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: scaleVertical(3),
        },
        timeText: {
            ...FONTS.ADDITIONAL_TEXT_14,
            color: colors.regularText,
            marginLeft: scaleHorizontal(4),
        },
        image: {
            width: scaleHorizontal(179),
            height: scaleHorizontal(88)
        },
        titleWrapper: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: scaleHorizontal(16),
        },
        title: {
            flex: 1,
            ...FONTS.ADDITIONAL_TEXT_14,
            lineHeight: scaleFontSize(15),
            color: colors.regularText,
        },
        timeWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: scaleHorizontal(23),
        },
    });
    return styles;
};