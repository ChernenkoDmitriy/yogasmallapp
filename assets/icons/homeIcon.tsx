import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const HomeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={ width || 20}
        height={height || 20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M7 18.501H5a4 4 0 01-4-4V8.209a4 4 0 011.927-3.421l5-3.03a4 4 0 014.146 0l5 3.03A4 4 0 0119 8.208v6.293a4 4 0 01-4 4h-2m-6 0v-4a3 3 0 116 0v4m-6 0h6"
            stroke={color || "#FCEBD4"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
