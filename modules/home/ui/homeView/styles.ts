import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { scaleVertical } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            paddingBottom: scaleVertical(28),
        },
        text: {
            color: colors.regularText
        }
    });
    return styles;
}
