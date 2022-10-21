import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems: 'center',
            height: scaleVertical(44),
            backgroundColor: colors.blockBackground,
            borderRadius: 8,
            paddingHorizontal: scaleHorizontal(16),
        },
        title: {
            ...FONTS.TEXT_REGULAR_16,
            color: colors.subText,
        },
        textInput: {
            flex: 1,
            padding: 0,
            textAlign:'center',
            marginRight: scaleHorizontal(16),
            ...FONTS.TEXT_REGULAR_16,
            color: colors.regularText,
        },
    });
    return styles;
};