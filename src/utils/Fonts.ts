import { TextStyle } from "react-native";
import { scaleFontSize } from "./Utils";
 
interface IFonts {
    TITLE_32: TextStyle,
    TITLE_22: TextStyle,
    CAPTION_20: TextStyle,
    MEDIUM_18: TextStyle,
    TEXT_LARGE_16: TextStyle,
    TEXT_SMALL_14: TextStyle,
    TEXT_SMALL_12: TextStyle,
    ADDITIONAL_TEXT_11: TextStyle,
}

export const FONTS: IFonts = {
    TITLE_32: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '700',
        fontSize: scaleFontSize(32),
        lineHeight: scaleFontSize(40),
    },
    TITLE_22: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '700',
        fontSize: scaleFontSize(22),
        lineHeight: scaleFontSize(32),
    },
    CAPTION_20: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '400',
        fontSize: scaleFontSize(20),
        lineHeight: scaleFontSize(28),
    },
    MEDIUM_18: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(24),
    },
    TEXT_LARGE_16: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '700',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(24),
    },
    TEXT_SMALL_14: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '700',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(20),
    },
    TEXT_SMALL_12: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '400',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(16),
    },
    ADDITIONAL_TEXT_11: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '400',
        fontSize: scaleFontSize(11),
        lineHeight: scaleFontSize(14),
    },
}
