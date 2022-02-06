import Button from "@material-ui/core/Button";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";

/**
 * テキストエリア
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const forwardAction = () => {
    history.push(props.url);
  };
  const history = useHistory();

  return (
    <StyledPrimaryButton>
      <DefaultButton width="30px" text={props.text} onClick={forwardAction} />
    </StyledPrimaryButton>
  );
};

export type PrimaryButtonProps = {
  text: string;
  url: string;
};
const StyledPrimaryButton = styled(Button)`
  background-color: green;
`;

export default PrimaryButton;
