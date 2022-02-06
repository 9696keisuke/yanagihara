import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

registerLocale("ja", ja);

const Calender: React.FC<CalenderProps> = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  const data = {
    value: "11111111",
    b: "bbbb",
  };
  const formedData = Object.entries(data);

  // formedData.map((data) => {
  //   data === props.dataType.value && console.log("formedData");
  // });

  const a = Object.keys(data);

  a.map((key) => {
    console.log("ここ");
    props.dataType.map((type) => {
      key === type.value && console.log("それそれええええええ");
    });
  });
  // Object.keys(data).forEach(function (key) {
  //   console.log(key + "は" + data[key] + "と鳴いた！");
  // });

  props.dataType.map((data) => {
    console.log(data.value);
  });

  return (
    <React.Fragment>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        locale="ja"
        dateFormat="yyyy/MM/dd"
      />
    </React.Fragment>
  );
};
export type CalenderProps = {
  dataType: {
    value: string;
    width: string;
    text: string;
  }[];
};

const Text = styled.div``;

export default Calender;
