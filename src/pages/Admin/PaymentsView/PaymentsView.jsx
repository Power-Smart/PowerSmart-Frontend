import PageWrapper from "../../../components/Wrappers/PageWrapper";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import Table from "./Table";

const PaymentsView = () => {
  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar title="Payments" />
        <ContentWrapper>
          <Table />
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default PaymentsView;
