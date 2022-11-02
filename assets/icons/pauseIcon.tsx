import React, { FC } from "react"
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    colorIcon?: string;
    colorStart?: string;
    colorEnd?: string;
}

export const PauseIcon: FC<IProps> = ({ width, height, colorIcon, colorStart, colorEnd }) => (
    <Svg
        width={width || 50}
        height={height || 50}
        viewBox="0 0 56 56"
        fill="none"
    >
        <Circle cx={28} cy={28} r={28} fill="url(#paint0_linear_115_240)" />
        <Path
            d="M23 23c0-.552.56-1 1.25-1s1.25.448 1.25 1v11c0 .552-.56 1-1.25 1S23 34.552 23 34V23zM30.5 23c0-.552.56-1 1.25-1s1.25.448 1.25 1v11c0 .552-.56 1-1.25 1s-1.25-.448-1.25-1V23z"
            fill={colorIcon || "#fff"}
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_115_240"
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
