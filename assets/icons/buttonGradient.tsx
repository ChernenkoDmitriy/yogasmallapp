import React, { FC } from "react"
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    colorStart?: string;
    colorEnd?: string;
}

export const ButtonGradient: FC<IProps> = ({ width, height, colorStart, colorEnd }) => (
    <Svg
      width={width || 374}
      height={height || 54}
      viewBox="0 0 374 54"
      fill="none"
    >
      <Path fill="url(#paint0_linear_5_3)" d="M0 0H374V54H0z" />
      <Defs>
        <LinearGradient
          id="paint0_linear_5_3"
          x1={187}
          y1={54}
          x2={187}
          y2={-0.0000014416}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colorStart || "#130409"} />
          <Stop offset={1} stopColor={colorEnd || "#570034"} />
        </LinearGradient>
      </Defs>
    </Svg>
)
