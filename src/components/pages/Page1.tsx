import React from "react";
import PrimaryButton from "../commons/button/PrimaryButton";
import { PersistentDrawerMainContent } from "../commons/persistentDrawerMainContent";
import MainTemplate from "../templete/Maintemplete";
import List from "../commons/List";
import { data } from "../../constants/constants";

const Page1: React.FC = (props) => {
  return (
    <MainTemplate
      title="About"
      content={
        <>
          <PersistentDrawerMainContent />

          <PrimaryButton text="まえ" url="/test" />
          <PrimaryButton text="うしろ" url="/page2" />
          <List />
        </>
      }
    />
  );
};

export default Page1;
