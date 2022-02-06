import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Item from "../common/item";

import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { ReadStream } from "tty";

class MainTemplate extends React.Component {
  class Detail extends React.Component {
  render() {
    return (
      <div>
        <div className="classification-name">名前</div>
        <div className="description">説明</div>
        <div className="unit-price">0円</div>
        <div className="num-people">
          <select value="0">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>名</span>
        </div>
      </div>
    );
  }
}

class Summary extends React.Component {
  render() {
    return (
      <div>
        <div className="party">
          <input type="text" className="party" value="0" />
          <span>名様</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <input type="text" className="total-amount" value="0" />
          <span>円</span>
        </div>
      </div>
    );
  }
}

class AdmissionFeeCalculator extends React.Component {
  render() {
    return (
      <>
        <Detail />
        <Summary />
      </>
    );
  }
}

export default MainTemplate;
