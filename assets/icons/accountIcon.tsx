import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const AccountIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 24}
        height={height || 24}
        viewBox="0 0 22 22"
        fill="none"
    >
        <Path
            d="M5 20.501v-1a7 7 0 1114 0v1"
            stroke={color || "#FCEBD4"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 12.501a4 4 0 100-8 4 4 0 000 8z"
            stroke={color || "#FCEBD4"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
