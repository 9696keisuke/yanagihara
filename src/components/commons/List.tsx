import * as React from "react";
import { render } from "react-dom";

import { useTable, Column } from "react-table";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import styled from "styled-components";

const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

function List() {
  const classes = useStyles();
  return (
    <>
      <div className="App">
        {" "}
        <div className="table-container">
          {" "}
          <Table className={classes.table}>
            {" "}
            <TableRow className="row-style">
              {" "}
              <StayledHeader>
                <TableCell variant="head">会社名</TableCell>{" "}
              </StayledHeader>
              <TableCell>柳原一丁目</TableCell>
            </TableRow>{" "}
            <TableRow className="row-style">
              {" "}
              <StayledHeader>
                <TableCell variant="head">代表</TableCell>{" "}
              </StayledHeader>
              <TableCell>くろだ</TableCell>
            </TableRow>{" "}
            <TableRow className="row-style">
              {" "}
              <StayledHeader>
                <TableCell variant="head">資本金</TableCell>{" "}
              </StayledHeader>
              <TableCell>3000000000000万円</TableCell>
            </TableRow>{" "}
          </Table>{" "}
        </div>{" "}
      </div>
    </>
  );
}
const StayledHeader = styled.div`
  background-color: red;
`;

export default List;
