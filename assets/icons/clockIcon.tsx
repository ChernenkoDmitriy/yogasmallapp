import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const ClockIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 16}
        height={height || 16}
        viewBox="0 0 16 16"
        fill="none"
    >
        <Path
            d="M11.333 8.667H8V5.333"
            stroke="#FCEBD4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8 14.667a6 6 0 100-12 6 6 0 000 12z"
            stroke={color || "#FCEBD4"}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
