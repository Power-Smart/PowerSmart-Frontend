import Table from "./Table";
import "./PaymentView.css";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";

const PaymentView = () => {
  return (
    <PageWrapper>
      <Sidebar />
      <PageContent>
        <TopBar
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
          title="Payments"
        />
        <ContentWrapper>
          <Table />
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default PaymentView;
