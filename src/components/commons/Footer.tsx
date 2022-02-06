import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

const Footer: React.FC = (props) => {
  return <Copyright />;
};

export default Footer;
