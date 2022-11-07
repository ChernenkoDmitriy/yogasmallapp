import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
    riteSide?: boolean,
}

export const CrossIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
      width={width || 20}
      height={height || 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M1.75 18.25l16.5-16.5m-16.5 0l16.5 16.5"
        stroke={color || "#fff"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
)
