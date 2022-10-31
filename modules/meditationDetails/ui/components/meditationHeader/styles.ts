import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: scaleVertical(14)
        },
        image: {
            width: scaleHorizontal(222),
            height: scaleHorizontal(222),
        },
        title: {
            ...FONTS.TITLE_32,
            color: colors.regularText,
            textAlign: 'center',
            marginTop: scaleVertical(25),
            marginHorizontal: scaleHorizontal(20),
        },
        timeWrapper: {
            flexDirection: 'row',
            alignItems:'center',
            marginTop: scaleVertical(15),
        },
        timeText: {
            ...FONTS.TEXT_REGULAR_18,
            fontWeight: '400',
            color: colors.focusedTab,
            textAlign: 'center',
            marginLeft: scaleHorizontal(6),
        }
    });
    return styles;
}
