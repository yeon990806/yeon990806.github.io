import { ReactNode } from "react";
import styled from "styled-components";

type ButtonShape =  "pill" | "rounded" | "square" | "none" | undefined;
type ButtonBorderType = "outlined" | "fill" | "none" | undefined;
type ButtonSize = "small" | "medium" | "large" | undefined;

interface ButtonProps {
  children: ReactNode
  className?: string
  shape?: ButtonShape;
  borderType?: ButtonBorderType;
  size?: ButtonSize;
  minWidth?: number;
}

const buttonSizeList = ["small", "medium", "large"];

const Button = ({
  children,
  className,
  shape,
  borderType,
  size,
  minWidth,
}: ButtonProps) => <StyledButton
  className={className}
  $shape={shape}
  $borderType={borderType}
  $size={size}
  $minWidth={minWidth}
>
  {children}
</StyledButton>;

const getShapeStyle = (shape: ButtonShape): string => {
  switch (shape) {
    case "pill":
      return 'border-radius: 24px;'
    case "rounded":
      return 'border-radius: 8px;'
    default:
      return ''
  }
};

const getButtonStyle = (type: ButtonBorderType): string => {
  switch (type) {
    case 'outlined':
      return `border: 2px solid #2c698d;
      background: none;
      color: #2c698d;
      transition: 0.4s ease;
      &:hover {background-color: #2c698d; color: white;}
    `
    case "fill":
      return 'border: 0; background-color: #2c698d; color: white;'
    case "none":
    default:
      return 'border: none; background: none;'
  }
};

const StyledButton = styled.button<{
  $shape: ButtonShape;
  $borderType: ButtonBorderType;
  $size: ButtonSize
  $minWidth?: number;
}>`
  ${props => {
    const paddingSize = `${(buttonSizeList.indexOf(props.$size || "medium") + 1) * 4}px;`
    const fontSize = `${(buttonSizeList.indexOf(props.$size || "medium") + 1) * 6}px;`
    return `padding: ${paddingSize} font-size: ${fontSize}`;
  }}
  ${props => getShapeStyle(props.$shape)}
  ${props => getButtonStyle(props.$borderType)}
  ${props => props.$minWidth ? `min-width: ${props.$minWidth}px;` : ''}
  cursor: pointer;
`;

Button.defaultProps = {
  shape: 'rounded',
  borderType: 'fill'
};

export default Button;