import React, { useCallback } from "react";
import styled from "styled-components";

/**
 * テキストエリア
 */
const Textarea: React.FC<Textarea> = (props) => {
  const onChange = useCallback(
    (text: string): void => {
      text = props.maxLength ? text.substr(0, props.maxLength) : text;
      props.state.setText && props.state.setText(text);
    },
    [props]
  );

  return (
    <StyledTextarea
      {...props}
      value={props.state.text}
      onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
        props.onChange && props.onChange(event);
      }}
      type={props.isPassword ? "password" : "text"}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Textarea = {
  state: {
    text: string;
    setText?: (text: string) => void;
  };
  placeholder?: string;
  maxLength?: number;
  isPassword?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  width?: string;
  margin?: string;
  textAlign?: string;
};

export const StyledTextarea = styled.input<{
  width?: string;
  margin?: string;
  textAlign?: string;
}>`
  width: ${(props): string => (props.width ? props.width : "160px")};
  height: 40px;
  margin: ${(props): string => (props.margin ? props.margin : "0")};
  padding: 0 12px;
  color: black;
  font-size: 16px;
  line-height: 16px;
  text-align: ${(props): string =>
    props.textAlign ? props.textAlign : "left"};
  background: beige;
  border: 1px solid blue;
  border-radius: 4px;

  :focus,
  :active {
    border: 1px solid pink;
  }
`;

export default Textarea;
