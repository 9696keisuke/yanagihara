import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Textarea from "../commons/TextArea";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Calender from "../commons/Calender";
import { Link, useHistory } from "react-router-dom";
import DefaultButton from "../commons/button/DefaultButton";
import PrimaryButton from "../commons/button/PrimaryButton";

const Test: React.FC = (props) => {
  //const 関数名 = useCallback(関数,[依存する配列])
  //const 関数名 = useCallback(() => {},[])アロー関数の場合
  //[]内を空欄にしたら初回のみ実行,[]内が関数または変数だったらその値が変わった時のみ
  //onClickとかで呼ばれても、[]内が変わらなかったら反映されない

  // const outputEvenNumber = useCallback(() => {
  //   if (count % 2 === 0) {
  //     console.log("useCallbackが実行されました");
  //   }
  // }, [count]);

  //useEffect(関数,[依存する配列])
  //useEffect(() => {},[])アロー関数の場合
  //毎回実行される,レンダリング後[]内の値が変わった時のみそれが反映される
  //[]内を空欄にしたら初回のみ実行,[]内が関数または変数だったらその値が変わった時のみ
  //第二引数が空欄の場合、毎回実行
  // useEffect(() => {
  //   outputEvenNumber();
  //   console.log("useEffectが実行されました");
  // }, [outputEvenNumber]);

  const [endDate, setEndDay] = useState("初期値");
  const [policyVinNo, setPolicyVinNo] = useState("初期値");

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  useEffect(() => {
    console.log("countAかわったよ");
  }, [countA]);

  const countUp = useCallback(
    (count, countType) => {
      console.log(countB);

      //カウントアップ
      if (countType === "A") {
        setCountA(count.countA + 1);
        console.log("countA");
        console.log(countA);
      } else if (countType === "B") {
        setCountB(count.countB + 1);
        console.log("countB");
        console.log(countB);
      }
    },
    [countA, countB]
  );
  const page1 = () => {};
  // const clear = useCallback(() => {
  //   console.log("clear");
  //   console.log(countA);
  //   setStartDay(new Date());
  //   setEndDay("");
  //   setPolicyVinNo("");
  //   setCountA(0);
  // }, [startDate, endDate, policyVinNo, countA]);
  const history = useHistory();
  const dataType = [
    {
      value: "value",
      width: "100px",
      text: "データ1",
    },
    {
      value: "value",
      width: "100px",
      text: "データ1",
    },
  ];
  const forwardAction = () => {
    history.push("/page2");
  };
  return (
    <>
      <SerchLine>
        <Text>なまえ</Text>
        <CalenderArea>
          <Calender dataType={dataType} />
        </CalenderArea>
        <Text>さんか</Text>
        <CalenderArea>
          <Calender dataType={dataType} />
        </CalenderArea>
        <Text>かみなり</Text>
        <Textarea
          width="1px"
          state={{ text: policyVinNo, setText: setPolicyVinNo }}
          margin="40px"
        />
        {/* <SearchButton onClick={search}>検索</SearchButton> */}
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {/* <CrearButton
            color="primary"
            // disabled={true}
            aria-label="outlined primary button group"
            onClick={clear}
          >
            削除
          </CrearButton> */}
        </ButtonGroup>
      </SerchLine>
      <Text>A:{countA}</Text>
      <Text>B:{countB}</Text>
      <ButtonGroup>
        <Button
          onClick={() => {
            setCountA(countA + 1);
          }}
        >
          count A
        </Button>
        <Button
          onClick={() => {
            setCountB(countB + 1);
          }}
        >
          count B
        </Button>
        <PrimaryButton text="いんどう" url="/page2" />
        <Link to="/page3">いいページ</Link>;
      </ButtonGroup>
    </>
  );
};

const CountButton = styled(Button)`
  color: red;
  background-color: blue;
`;

const CalenderArea = styled.div`
  input {
    width: 130px;
    height: 50px;
    boder: gray 1px solid;
  }
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

export type Type = {
  value: string;
  width: string;
  text: string;
};

export default Test;
