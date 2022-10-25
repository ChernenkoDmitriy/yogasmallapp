import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: scaleVertical(160),
            backgroundColor: colors.blockBackground,
            marginTop: scaleVertical(16),
            borderRadius: 16,
        },
        mainInfoWrapper: {
            flexDirection: 'row',
            paddingLeft: scaleHorizontal(11),
            paddingTop: scaleHorizontal(10),
        },
        iconWrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            width: scaleHorizontal(80),
            height: scaleHorizontal(80),
            borderRadius: 16,
            backgroundColor: colors.iconBackground,
            marginRight: scaleHorizontal(16),
        },
        titleWrapper: {
            justifyContent: 'space-between',
            height: scaleHorizontal(80),
        },
        title: {
            ...FONTS.TEXT_REGULAR_18,
            color: colors.regularText,
        },
        timeWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        timeText: {
            ...FONTS.ADDITIONAL_TEXT_13,
            color: colors.focusedTab,
            marginLeft: scaleHorizontal(4)
        },
        descriptionWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: scaleHorizontal(11),
            marginTop: scaleVertical(3),
        },
        descriptionText: {
            ...FONTS.ADDITIONAL_TEXT_13,
            color: colors.regularText,
            maxWidth: scaleHorizontal(315),
            // marginRight: scaleHorizontal(16),
        },
    });
    return styles;
}
