import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleVertical } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: scaleVertical(54),
            borderRadius: 16,
        },
        text: {
            position: 'absolute',
            ...FONTS.TITLE_20,
            color: colors.regularText,
            textAlign: 'center',
        },
        absoluteSheet: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}
