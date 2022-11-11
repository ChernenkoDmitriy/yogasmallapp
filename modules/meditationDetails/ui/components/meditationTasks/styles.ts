import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors, isAvailable: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            ...FONTS.TEXT_REGULAR_18,
            color: colors.regularText,
            paddingHorizontal: scaleHorizontal(31),
            marginBottom: scaleVertical(10),
            opacity: isAvailable ? 1 : 0.5,
            marginTop: scaleVertical(33),
        },
        taskText: {
            ...FONTS.TEXT_REGULAR_16,
            paddingHorizontal: scaleHorizontal(31),
            color: colors.regularText,
            opacity: isAvailable ? 1 : 0.5,
        },
        contentContainerStyle: {
            paddingBottom: scaleVertical(23),
        }
    });
    return styles;
}
