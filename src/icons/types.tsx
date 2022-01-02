import React from "react";

export type IconComponent = React.FC<IconProps>;

export interface IconProps {
  size?: number;
  color?: string;
}
