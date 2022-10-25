import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const CourseIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
      width={width || 24}
      height={height || 25}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        d="M14.571 15.505l.858 1.845s3.857.819 3.857 2.767c0 1.384-1.715 1.384-1.715 1.384H13l-2.25-1.25"
        stroke={ color || "#7C6974"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.429 15.505l-.857 1.845s-3.858.819-3.858 2.767c0 1.384 1.715 1.384 1.715 1.384H8.5l2.25-1.25 2.75-1.75"
        stroke={color || "#7C6974"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16.427s2.143-.461 3.429-.922C7.714 9.047 11.57 9.508 12 9.508c.429 0 4.286-.461 5.571 5.997 1.286.46 3.429.922 3.429.922M12 7.501a2 2 0 100-4 2 2 0 000 4z"
        stroke={color || "#7C6974"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
)
