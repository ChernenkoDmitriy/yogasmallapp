import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent:'center',
        },
        welcomeText:{
            ...FONTS.ADDITIONAL_TEXT_13,
            color: colors.additionalText,
        },
        subText: {
            ...FONTS.ADDITIONAL_TEXT_14,
            color: colors.additionalText,
        },
        title: {
            ...FONTS.TITLE_34,
            color: colors.regularText,
            textAlign:'center',
            marginBottom: scaleVertical(10)
        },
    });
    return styles;
};