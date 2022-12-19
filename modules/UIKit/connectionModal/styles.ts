import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            margin: 0,
        },
        contentWrapper: {
            alignItems: 'center',
            marginHorizontal: scaleHorizontal(16),
            paddingBottom: scaleVertical(10),
            backgroundColor: colors.blockBackground,
            borderRadius: 8,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: scaleHorizontal(10),
            paddingVertical: scaleVertical(10),
            borderBottomWidth: 1,
            borderColor: colors.background,
        },
        title: {
            ...FONTS.TEXT_REGULAR_18,
            color: colors.regularText,
        },
        TipText: {
            ...FONTS.TEXT_REGULAR_16,
            color: colors.regularText,
            marginVertical: scaleVertical(15),
            marginHorizontal: scaleHorizontal(20),
        },
        closeButton: {
            width: scaleHorizontal(20),
            justifyContent:'center',
            alignItems:'center',
        },
        mailButton: {
            width: scaleHorizontal(200),
            height: scaleVertical(35)
        }
    });
    return styles;
}
