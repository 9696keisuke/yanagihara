import React from "react";
import PrimaryButton from "../commons/button/PrimaryButton";
import { PersistentDrawerMainContent } from "../commons/persistentDrawerMainContent";
import MainTemplate from "../templete/Maintemplete";

const Page1: React.FC = (props) => {
  return (
    <MainTemplate
      title="About"
      content={
        <>
          <PersistentDrawerMainContent />

          <PrimaryButton text="まえ" url="/test" />
          <PrimaryButton text="うしろ" url="/page2" />
        </>
      }
    />
  );
};

export default Page1;
