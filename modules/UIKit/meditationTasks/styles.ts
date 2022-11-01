import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex:1,
            paddingHorizontal: scaleHorizontal(31),
        },
        title: {
            ...FONTS.TEXT_REGULAR_18,
            color: colors.regularText,
            marginBottom: scaleVertical(10),
        },
        taskText: {
            ...FONTS.TEXT_REGULAR_16,
            color: colors.regularText,
        },
    });
    return styles;
}
