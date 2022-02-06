import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

/**
 * ボタンの素
 */
const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  return (
    <StyledButton>
      <Button variant="outlined" onClick={props.onClick}>
        {props.text}
      </Button>
    </StyledButton>
  );
};

export type DefaultButtonProps = {
  width: string;
  text: string;
  onClick: () => void;
};

const StyledButton = styled(Button)`
  min-width: 64px;
  line-height: 32px;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  color: #fff;
  background: #639;
`;

export default DefaultButton;
