import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/colorTheme';
import { FONTS } from '../../utils/Fonts';
import { scaleHorizontal, scaleVertical, Utils } from '../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        tabBarStyle: {
            height: scaleVertical(79),
            backgroundColor: colors.tabBarBackground,
            borderTopWidth: 0,
            paddingBottom: Utils.isIOS ? scaleVertical(40) : scaleVertical(20),
            paddingTop: scaleVertical(11),
        },
        tabBarLabelStyle:{
            ...FONTS.LABEL_TEXT_12,
            height: scaleVertical(12),
        },
        iconWrapper: {
            alignItems: 'center',
            width: scaleHorizontal(24),
        },
        noTabBar: { width: 0, height: 0, overflow: 'hidden' },
    });
    return styles;
}
