import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // width: scaleHorizontal(374),
            paddingBottom: scaleVertical(11),
            backgroundColor: colors.blockBackground,
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
            width: scaleHorizontal(70),
            height: scaleHorizontal(70),
            borderRadius: 16,
            backgroundColor: colors.iconBackground,
            marginRight: scaleHorizontal(16),
        },
        titleWrapper: {
            justifyContent: 'space-between',
            width: scaleHorizontal(256),
            height: scaleHorizontal(70),
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
            alignItems:'flex-end',
            width: scaleHorizontal(352),
            marginHorizontal: scaleHorizontal(11),
            marginTop: scaleVertical(3),
        },
        descriptionText: {
            ...FONTS.ADDITIONAL_TEXT_13,
            color: colors.regularText,
            maxWidth: scaleHorizontal(290),
            textAlign: 'justify'
        },
    });
    return styles;
}
