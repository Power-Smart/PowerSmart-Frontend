import React, { useState } from "react";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import TopBar from "../../../components/smallComps/TopBar";
import PageContent from "../../../components/Wrappers/PageContent";
import Form from "../../../components/Forms/Form";
import FormGroup from "../../../components/Forms/FormGroup";
import TextInput from "../../../components/Forms/TextInput";
import FormTitle from "../../../components/Forms/FormTitle";
import FormSubmitButton from "../../../components/Forms/FormSubmitButton";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";

// Import the addTechSupport function from the API file
import { addTechSupport } from "../../../api/apiTechSupportAdd";

const TechSupportAdd = () => {
  const [techSupportData, setTechSupportData] = useState({
    user_id: "",
    profile_pic: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API call to add tech support
      const response = await addTechSupport(techSupportData);
      alert("Tech Support Added Successfully");
      // Reset the form or redirect as needed
    } catch (error) {
      console.error("Error adding tech support:", error);
      alert("Failed to add tech support");
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    // Reset the form fields by updating the state
    setTechSupportData({
      user_id: "",
      profile_pic: "",
    });
  };

  // Update the state when the input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTechSupportData({
      ...techSupportData,
      [name]: value,
    });
  };

  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar title="Tech Support" />
        <ContentWrapper>
          <Form>
            <FormTitle>Add New Tech Support</FormTitle>
            <FormGroup>
              <TextInput
                type="text"
                label="user_id"
                name="user_id"
                value={techSupportData.user_id}
                onChange={(e) => setTechSupportData({ ...techSupportData, user_id: e.target.value })}
                required={true}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                type="text"
                label="profile_pic"
                name="profile_pic"
                value={techSupportData.profile_pic}
                onChange={(e) => setTechSupportData({ ...techSupportData, profile_pic: e.target.value })}
                required={true}
              />
            </FormGroup>
            <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
              <FormSubmitButton
                backgroundColor={"#0856CD"}
                urlLink={"register"}
                buttonText={"Submit"}
                onClick={handleSubmit}
              />
              <FormSubmitButton
                backgroundColor={"#CE4444"}
                urlLink={"register"}
                buttonText={"Cancel"}
                onClick={resetForm}
              />
            </div>
          </Form>
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default TechSupportAdd;
