import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const MoreIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 24}
        height={height || 24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 12.001a.5.5 0 100 1 .5.5 0 000-1zM18 12.001a.5.5 0 100 1 .5.5 0 000-1zM6 12.001a.5.5 0 100 1 .5.5 0 000-1z"
            fill={color || "#7C6974"}
            stroke={color || "#7C6974"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
