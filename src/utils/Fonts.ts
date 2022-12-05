import { TextStyle } from "react-native";
import { scaleFontSize } from "./Utils";

interface IFonts {
    TITLE_34: TextStyle,
    TITLE_32: TextStyle,
    TITLE_22: TextStyle,
    TITLE_20: TextStyle,
    TITLE_20_LIGHT: TextStyle,
    TITLE_18: TextStyle,
    TEXT_REGULAR_18: TextStyle,
    TEXT_REGULAR_16: TextStyle,
    ADDITIONAL_TEXT_14: TextStyle,
    ADDITIONAL_TEXT_13: TextStyle,
    ADDITIONAL_TEXT_12: TextStyle,
    LABEL_TEXT_12: TextStyle,
}

export const FONTS: IFonts = {
    TITLE_34: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '700',
        fontSize: scaleFontSize(34),
        lineHeight: scaleFontSize(42.74),
    },
    TITLE_32: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '700',
        fontSize: scaleFontSize(32),
        lineHeight: scaleFontSize(42.22),
    },
    TITLE_22: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '700',
        fontSize: scaleFontSize(22),
        lineHeight: scaleFontSize(27.65),
    },
    TITLE_20: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '700',
        fontSize: scaleFontSize(20),
        lineHeight: scaleFontSize(22),
    },
    TITLE_20_LIGHT: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '400',
        fontSize: scaleFontSize(20),
        lineHeight: scaleFontSize(22),
    },
    TITLE_18:  {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '700',
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22.63),
    },
    TEXT_REGULAR_18: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '600',
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22.63),
    },
    TEXT_REGULAR_16: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '400',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(23),
    },
    ADDITIONAL_TEXT_14: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '400',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(22),
    },
    ADDITIONAL_TEXT_13: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '600',
        fontSize: scaleFontSize(13),
        lineHeight: scaleFontSize(22),
    },
    ADDITIONAL_TEXT_12: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '400',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(20),
    },
    LABEL_TEXT_12: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '400',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(12),
    },
}
