import { useTheme } from "styled-components";
import { IconComponent } from "./types";

export const ExpandIcon: IconComponent = ({ size = 24, color }) => {
  const theme = useTheme();
  color ||= theme.colors.onBackground;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      viewBox="0 0 24 24"
      width={`${size}px`}
      fill={color}
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </svg>
  );
};
