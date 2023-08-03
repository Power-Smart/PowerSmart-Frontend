import React from "react";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import Form from "../../../components/Forms/Form";
import FormGroup from "../../../components/Forms/FormGroup";
import FormRowDual from "../../../components/Forms/FormRowDual";
import TextInput from "../../../components/Forms/TextInput";
import FormTitle from "../../../components/Forms/FormTitle";
import FormSubmitButton from "../../../components/Forms/FormSubmitButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UsageReports = () => {
  const navigate = useNavigate();
  const { isLogged, user } = useSelector((state) => state.user);
  // useEffect(() => {
  //     if (!isLogged || user.role == 0) {
  //         navigate('/login');
  //     }
  // }, [])

  const handleAddComplaint = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  const clearForm = (e) => {
    e.preventDefault();
    alert("Form Reset");
  };

  return (
    <PageWrapper>
      <Sidebar />
      <PageContent>
        <TopBar
          title="Complaint"
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
        />
        <ContentWrapper>
          <div className="px-12 py-7 pt-10  mx-auto bg-[#1C1C2E] rounded-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <hr style={{ color: "gray-800" }} className="w-8/9 pt-6 mx-auto" />
            <div className="titles">
              <h1 className="text-white text-lg ">Usage Status</h1>
            </div>
          </div>
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default UsageReports;
