import * as React from "react";
import { render } from "react-dom";

import { useTable, Column } from "react-table";
import styled from "styled-components";
import "./App.css";

interface Data {
  artist: string;
  song: string;
  cost: string;
  sample: string;
}

const columns: Column<Data>[] = [
  {
    Header: "歌手",
    accessor: "artist",
    width: "30%",
  },
  {
    Header: "曲",
    accessor: "song",
    width: "30%",
  },
  {
    Header: "値段",
    accessor: "cost",
    width: "20%",
  },
  {
    Header: "サンプル",
    accessor: "sample",
    width: "20%",
  },
];

const data: Data[] = [
  {
    artist: "乃木坂46",
    song: "さよならの意味",
    cost: "100000",
    sample: "",
  },
  {
    artist: "乃木坂45",
    song: "ばいばいの意味",
    cost: "100000",
    sample: "",
  },
  {
    artist: "乃木坂44",
    song: "おはようの意味",
    cost: "100000",
    sample: "",
  },
  {
    artist: "乃木坂43",
    song: "こんにちはの意味",
    cost: "100000",
    sample: "",
  },
  {
    artist: "乃木坂42",
    song: "たかなわの意味",
    cost: "100000",
    sample: "",
  },
];

function Table() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data });

  console.log(getTableProps);
  console.log(getTableBodyProps);
  console.log(headerGroups);
  console.log(rows);
  console.log(prepareRow);

  return (
    <StyledTable {...getTableProps()}>
      {headerGroups.map((headerGroup) => (
        <StyledTableHeader {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <StyledTableColumn width={column.width}>
              {column.render("Header")}
            </StyledTableColumn>
          ))}
        </StyledTableHeader>
      ))}
      <StyledTableBody>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTableBody>
    </StyledTable>
  );
}

const StyledTable = styled.div`
  width: auto;
  boder: gray 1px solid;
`;
const StyledTableHeader = styled.div`
  width: 80%;
  display: flex;
  height: auto;
  background-color: #eeeeee;
  font-weight: bold;
  font-family: Arial;
`;
const StyledTableBody = styled.div`
  boder: gray 1px solid;
`;

export const StyledTableColumn = styled.div<{
  width?: string | any;
  margin?: string;
}>`
  text-align: center;
  width: ${(props): string => (props.width ? props.width : "160px")};
  height: 40px;
  padding: 0 12px;
  color: black;
  font-size: 16px;
  border: 1px solid gray;

  :hover {
    border: 3px solid pink;
  }
`;
export default Table;
