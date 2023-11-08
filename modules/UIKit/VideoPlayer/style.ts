import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            height: '100%',
            width: '100%',
            backgroundColor: colors.background,
            borderRadius: 15,
            overflow:'hidden'
        },
        fullScreenButton: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: 10,
            position: 'absolute',
            bottom: 0,
            right: 0,
          },
    });
    return styles;
};