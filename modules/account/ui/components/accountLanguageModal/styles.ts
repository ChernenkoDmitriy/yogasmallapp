import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            margin: 0,
        },
        contentWrapper: {
            alignItems:'center',
            marginHorizontal: scaleHorizontal(16),
            marginBottom: scaleHorizontal(12),
            backgroundColor: colors.blockBackground,
            borderRadius: 8,
        },
        swipeIndicator:{
            width: scaleHorizontal(40),
            height: scaleVertical(4),
            borderRadius: 100,
            marginVertical: scaleVertical(8),
            backgroundColor: colors.background,
        },
        button: {
            alignItems: 'center',
            justifyContent:'center',
            width: '100%',
            height: scaleVertical(40),
            marginBottom: scaleVertical(6)
        },
        title: {
            ...FONTS.TEXT_REGULAR_18,
            color: colors.regularText,
        },
    });
    return styles;
}
