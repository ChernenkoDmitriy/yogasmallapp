import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            alignItems:'center',
            paddingTop: scaleVertical(25),
            paddingHorizontal: scaleHorizontal(20),
            width: '100%',
        },
        emptyText: {
            ...FONTS.TITLE_20_LIGHT,
            color: colors.regularText,
            marginTop: scaleVertical(50)
        }
    });
    return styles;
}
