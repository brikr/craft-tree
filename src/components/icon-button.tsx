import React from "react";
import { IconComponent } from "src/icons/types";
import styled from "styled-components";

const Button = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;

  background: rgba(0, 0, 0, 0);
  border: none;

  cursor: pointer;
`;

interface Props {
  icon: IconComponent;
  className?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: React.FC<Props> = ({
  className,
  color,
  icon,
  onClick,
}) => {
  const Icon = icon;

  return (
    <Button className={className} onClick={onClick}>
      <Icon color={color} />
    </Button>
  );
};
