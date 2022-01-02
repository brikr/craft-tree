import { useTheme } from "styled-components";
import { IconComponent } from "./types";

export const CollapseIcon: IconComponent = ({ size = 24, color }) => {
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
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
    </svg>
  );
};
