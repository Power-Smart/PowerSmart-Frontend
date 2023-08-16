import Table from "./Table";
import "./StockManagerView.css";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";
import ButtonBar from "../../../components/Wrappers/ButtonBar";
import { Link } from "react-router-dom";

const StockManagerView = () => {
  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
          title="Stock Managers"
        />
        <ContentWrapper>
          <ButtonBar>
            <Link to="./add">
              <button className="mx-2 px-4 py-2 bg-[#83BCFF] rounded-md text-black">
                Add New
              </button>
            </Link>
          </ButtonBar>
          <Table />
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default StockManagerView;
