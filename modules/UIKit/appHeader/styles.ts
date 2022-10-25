import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../src/utils/Utils';

export const getStyle = (color: IColors, isBackButton: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            height: scaleVertical(54),
            width: '100%',
            paddingLeft: scaleHorizontal(15),
        },
        backButton: {
            marginRight: scaleHorizontal(5),
            opacity: isBackButton? 1 : 0,
        },
        titleWrapper: {
            flex: 1,
        },
        title: {
            ...FONTS.TITLE_22,
            textAlign:'center',
            width: scaleHorizontal(300),
            color: color.regularText,
        }
    });
    return styles;
}
