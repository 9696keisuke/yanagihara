import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

/**
 * テキストエリア
 */
const LinkButton: React.FC<Textarea> = (props) => {
  const forwardAction = () => {
    history.push("/page2");
  };
  const history = useHistory();

  return (
    <StyledButton>
      <Button onClick={forwardAction}>いどぅうううう</Button>
      <Link to="/page3">いいページ</Link>
    </StyledButton>
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

const StyledButton = styled(Button)`
  background-color: green;
`;

export default LinkButton;
