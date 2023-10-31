import PageWrapper from "../../../components/Wrappers/PageWrapper";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import ButtonBar from "../../../components/Wrappers/ButtonBar";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Table from "./Table";

const ItemsView = () => {
  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar title="Items" />
        <ContentWrapper>
          <ButtonBar>
            <Link to="./add">
              <Button type="primary" className="mx-2 border-inherit">
                Add New
              </Button>
            </Link>
          </ButtonBar>
          <Table />
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default ItemsView;
