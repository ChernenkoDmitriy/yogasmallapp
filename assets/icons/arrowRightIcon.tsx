import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const ArrowRightIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 24}
        height={height || 24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
            stroke={color || "#FCEBD4"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
