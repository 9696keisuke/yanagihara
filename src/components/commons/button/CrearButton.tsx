import { Button } from "@material-ui/core";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

/**
 * テキストエリア
 */
const CrearButton: React.FC<Text> = (props) => {
  const forwardAction = () => {
    history.push("/page2");
  };
  const history = useHistory();

  return (
    <StyledCrearButton>
      <Button onClick={forwardAction}>いどぅうううう</Button>
    </StyledCrearButton>
  );
};

const StyledCrearButton = styled(Button)`
  background-color: green;
`;

export default CrearButton;
