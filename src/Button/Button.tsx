import * as React from "react";
import styled from "styled-components";

export interface IButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const StyledButton = styled("button")`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 2px;
  color: lime;
  outline: none;
  background: ${({ disabled }) => (disabled ? "gray" : "blue")};
`;

export const Button: React.FunctionComponent<IButtonProps> = (
  props: IButtonProps
) => {
  const { title, ...others } = props;

  return <StyledButton {...others}>{title}</StyledButton>;
};

// export default Button;
