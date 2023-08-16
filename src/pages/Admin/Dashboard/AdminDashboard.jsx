import React from "react";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import ButtonBar from "../../../components/Wrappers/ButtonBar";
import AdminSidebar from "../../../components/Sidebar/Admin/AdminSidebar";

import image1 from "../../../assets/tempAdminDashboard/image1.png";
import image2 from "../../../assets/tempAdminDashboard/image2.png";
import image3 from "../../../assets/tempAdminDashboard/image3.png";
import image4 from "../../../assets/tempAdminDashboard/image4.png";
import image5 from "../../../assets/tempAdminDashboard/image5.png";
import image6 from "../../../assets/tempAdminDashboard/image6.png";
import image7 from "../../../assets/tempAdminDashboard/image7.png";
import image8 from "../../../assets/tempAdminDashboard/image8.png";

const AdminDashboard = () => {
  return (
    <PageWrapper>
      <AdminSidebar />
      <PageContent>
        <TopBar
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
          title="Dashboard"
        />
        <ContentWrapper>
          <div class="flex gap-20">
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
          </div><br />
          <div class="flex gap-20 mb-20">
            <div>
              <img src={image4} alt="Image 4" /><br />
              <img src={image5} alt="Image 5" /><br />
              <img src={image6} alt="Image 6" />
            </div>
            <div>
              <img src={image7} alt="Image 7" /><br />
              <img src={image8} alt="Image 8" />
            </div>
          </div>
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default AdminDashboard;
