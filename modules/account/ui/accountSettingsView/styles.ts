import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { scaleHorizontal, scaleVertical } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor: colors.background,
        },
        logoutButton:{
            width: scaleHorizontal(374),
            marginBottom: scaleVertical(24),
        }
    });
    return styles;
}
