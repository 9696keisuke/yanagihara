import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import MainTemplate from "../templete/Maintemplete";

const Page2: React.FC = (props) => {
  return <MainTemplate title="page2" content={<Text>にぺ</Text>} />;
};

const CrearButton = styled(Button)`
  /* background-color: green; */
`;
const CountButton = styled(Button)`
  color: red;
  background-color: blue;
`;

const Area = styled.div`
  align-items: center;
  text-align: center;
  background-color: red;
  width: 12px;
`;

const SerchLine = styled.div`
  display: flex;
`;
const Text = styled.div`
  color: blue;
  font-size: 40px;
`;
const SampleStyle = styled.div`
  background: red;
  height: 200px;
`;

export default Page2;
