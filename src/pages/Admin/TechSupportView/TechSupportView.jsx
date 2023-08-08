import Table from "./Table";
import "./TechSupportView.css";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";

const TechSupportView = () => {
  return (
    <PageWrapper>
      <Sidebar />
      <PageContent>
        <TopBar
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
          title="Tech Support"
        />
        <ContentWrapper>
          <Table />
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default TechSupportView;
