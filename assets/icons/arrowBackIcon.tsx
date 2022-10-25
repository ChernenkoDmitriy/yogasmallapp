import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const ArrowBackIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 38}
        height={height || 44}
        viewBox="0 0 38 44"
        fill="none"
    >
        <Path
            d="M22.702 32.414c.269.26.593.408.983.408.789 0 1.41-.621 1.41-1.4 0-.39-.157-.743-.436-1.021l-8.405-8.108 8.405-8.1c.279-.278.436-.64.436-1.02 0-.78-.621-1.401-1.41-1.401-.39 0-.705.14-.983.408l-9.296 8.99c-.334.325-.51.696-.51 1.132 0 .427.166.78.51 1.122l9.296 8.99z"
            fill={color || "#fff"}
        />
    </Svg>
)
