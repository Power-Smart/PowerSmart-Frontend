import Table from "./Table";
import "./StockManagerView.css";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";

const StockManagerView = () => {
  return (
    <PageWrapper>
      <Sidebar />
      <PageContent>
        <TopBar
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
          title="Stock Managers"
        />
        <ContentWrapper>
          <Table />
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default StockManagerView;
