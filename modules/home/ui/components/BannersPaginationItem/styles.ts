import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';

export const getStyle = (colors: IColors, width: number, backgroundColor: string) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.blockBackground,
            width,
            height: width,
            borderRadius: 50,
            overflow: 'hidden',
            marginHorizontal: 4,
        },
        indicator: {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
        }
    });
    return styles;
}
