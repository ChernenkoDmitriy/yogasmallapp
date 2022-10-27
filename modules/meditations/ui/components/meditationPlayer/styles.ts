import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            alignItems: 'center',
        },
        player: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scaleHorizontal(31),
        },
        track: {
            borderRadius: 16,
            height: scaleVertical(8),
        },
        trackContainer: {
            flex: 1,
            marginRight: scaleHorizontal(9),
            height: scaleVertical(40),
        },
        timeWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        timeText: {
            ...FONTS.TEXT_REGULAR_16,
            color: colors.regularText,
            textAlign: 'center',
            marginLeft: scaleHorizontal(6),
        }
    });
    return styles;
}
