import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: colors.background,
            // opacity:0,
        },
        text:{
            color: colors.regularText,
            textTransform:'uppercase',
        }
    });
    return styles;
}
