import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            height: scaleVertical(25),
            width: '100%',
        },
        title: {
            textAlign: 'left',
            ...FONTS.TITLE_20,
            color: colors.regularText
        },
        textWrapper:{
            flexDirection: 'row',
        },
        link: {
            ...FONTS.TITLE_20_LIGHT,
            color: colors.focusedTab,
            textAlign: 'right'
        }
    });
    return styles;
}
