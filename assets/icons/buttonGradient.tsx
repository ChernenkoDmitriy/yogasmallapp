import React, { FC } from "react"
import Svg, { Defs, LinearGradient, Path, Stop, Text, TSpan } from "react-native-svg";
import { scaleHorizontal, scaleVertical } from "../../src/utils/Utils";

interface IProps {
  width?: number;
  height?: number;
  colorStart?: string;
  colorEnd?: string;
  title: string;
}

export const ButtonGradient: FC<IProps> = ({ width, height, colorStart, colorEnd, title }) => (
  <Svg
    width={width || scaleHorizontal(374)}
    height={height || scaleVertical(54)}
    viewBox="0 0 374 54"
    fill="none"
  >
    <Path
        d="M358 0H16C7.163 0 0 7.163 0 16v22c0 8.837 7.163 16 16 16h342c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16z"
        fill="url(#paint0_linear_7_6)"
      />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_6"
        x1={187}
        y1={54}
        x2={187}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colorStart || "#130409"} />
        <Stop offset={1} stopColor={colorEnd || "#570034"} />
      </LinearGradient>
    </Defs>
    <Text
      fill={'#ffffff'}
      fontSize="20"
      fontWeight="700"
      fontFamily={'SourceSansPro-Regular'}
      x="34"
      y="30"
      alignmentBaseline="central"
      textAnchor={'middle'}
    >
      <TSpan inlineSize="300">
        {title}
      </TSpan>
    </Text>
  </Svg>
)
