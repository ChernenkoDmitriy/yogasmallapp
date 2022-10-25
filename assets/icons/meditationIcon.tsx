import React, { FC } from "react"
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

export const MeditationIcon: FC<IProps> = ({ width, height, color }) => (
  <Svg
    width={width || 25}
    height={height || 25}
    viewBox="0 0 23 23"
    fill="none"
  >
    <G clipPath="url(#clip0_115_1497)" fill={color || "#7C6974"}>
      <Path d="M7.565 6.24a.783.783 0 100-1.565.783.783 0 000 1.565zM16.696 6.24a.783.783 0 100-1.565.783.783 0 000 1.565zM12 3.11a.783.783 0 100-1.566.783.783 0 000 1.566zM23.752 18.19c-.07-.066-1.492-1.378-3.551-2.097 1.829-2.636 1.66-6.072 1.651-6.235a.783.783 0 00-.739-.738c-.134-.007-2.98-.142-5.51 1.12-.88-2.631-2.976-4.491-3.088-4.589a.783.783 0 00-1.03 0c-.112.098-2.207 1.958-3.088 4.59-2.53-1.263-5.376-1.128-5.51-1.12a.783.783 0 00-.74.737c-.009.163-.177 3.6 1.652 6.235-2.06.72-3.48 2.031-3.551 2.097a.783.783 0 000 1.143c.112.105 2.775 2.56 6.143 2.56.758 0 1.48-.125 2.145-.319.92 1.046 2.793 1.705 3.22 1.845.159.052.33.052.488 0 .427-.14 2.3-.799 3.22-1.845a7.676 7.676 0 002.145.318c3.367 0 6.031-2.454 6.143-2.558a.783.783 0 000-1.144zM12.002 7.343c.842.904 2.42 2.898 2.42 5.158 0 2.25-1.58 4.252-2.423 5.158-.843-.904-2.421-2.899-2.421-5.158 0-2.25 1.58-4.252 2.423-5.158zm-5.61 12.984c-1.82 0-3.45-.932-4.347-1.565.652-.46 1.692-1.078 2.908-1.38 1.456 1.256 3.318 1.789 4.769 2.01-.899.486-2.07.935-3.33.935zm-.724-4.42c-1.554-1.583-1.884-4.003-1.948-5.215.996.048 2.806.262 4.328 1.136-.227 2.2.71 4.297 2.071 6.04-3.14-.433-4.28-1.83-4.451-1.961zM12 21.847c-.664-.241-1.364-.583-1.842-.914A11.487 11.487 0 0012 19.778c.414.319 1.05.759 1.842 1.155-.479.33-1.178.673-1.842.914zm3.953-10.019c1.522-.874 3.333-1.089 4.329-1.136-.062 1.21-.389 3.625-1.95 5.215-.17.13-1.303 1.52-4.448 1.957 1.363-1.746 2.295-3.84 2.069-6.036zm1.656 8.5c-1.262 0-2.432-.45-3.33-.936 1.45-.221 3.312-.754 4.768-2.01 1.217.302 2.256.92 2.908 1.38-.898.633-2.528 1.565-4.346 1.565z" />
    </G>
    <Defs>
      <ClipPath id="clip0_115_1497">
        <Path fill={color || "#fff"} transform="translate(0 .501)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
