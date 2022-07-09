import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import MainTemplate from "../templete/Maintemplete";
import Table from "../commons/Table";

const Page2: React.FC = (props) => {
  return <MainTemplate title="販売" content={<Table />} />;
};

export default Page2;
