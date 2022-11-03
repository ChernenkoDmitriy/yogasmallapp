import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        title: {
            ...FONTS.TITLE_18,
            color: colors.regularText,
            marginTop: scaleVertical(30),
            paddingHorizontal: scaleHorizontal(31),
        },
        text:{
            ...FONTS.TEXT_REGULAR_16,
            color: colors.regularText,
            marginTop: scaleVertical(21),
            paddingHorizontal: scaleHorizontal(31),
        }
    });
    return styles;
}
