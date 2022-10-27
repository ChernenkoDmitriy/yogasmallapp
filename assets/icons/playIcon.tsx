import React, { FC } from "react"
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    colorIcon?: string;
    colorStart?: string;
    colorEnd?: string;
}

export const PlayIcon: FC<IProps> = ({ width, height, colorIcon, colorStart, colorEnd }) => (
    <Svg
        width={width || 50}
        height={height || 50}
        viewBox="0 0 56 56"
        fill="none"
    >
        <Circle cx={28} cy={28} r={28} fill="url(#paint0_linear_115_185)" />
        <Path
            d="M36.5 28.825a.93.93 0 000-1.65l-11-6.046c-.667-.367-1.5.092-1.5.824v12.094c0 .732.833 1.19 1.5.824l11-6.047z"
            fill={colorIcon || "#fff"}
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_115_185"
                x1={28}
                y1={56}
                x2={28}
                y2={-0.000001495}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor={colorStart || "#130409"} />
                <Stop offset={1} stopColor={colorEnd || "#570034"} />
            </LinearGradient>
        </Defs>
    </Svg>
)
