import styled from "styled-components";
import PrimaryButton from "../commons/button/PrimaryButton";
import Sidemenu from "../commons/sidemenu";
import PersistentDrawer from "../commons/persistentDrawer";
import Footer from "../commons/Footer";

export interface GenericTemplateProps {
  children: React.ReactNode;
  title: string;
}

const MainTemplate: React.FC<MainTemplateProps> = (props) => {
  return (
    <>
      <StyledMainTemplate>
        <PersistentDrawer
          sidemenu={<Sidemenu title="test" />}
          title={props.title}
        />
        {props.content}
      </StyledMainTemplate>

      <Footer />
    </>
  );
};
export type MainTemplateProps = {
  content?: React.ReactNode;
  title: string;
};

const StyledMainTemplate = styled.div`
  background: #fffacd;
  height: auto;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export default MainTemplate;
