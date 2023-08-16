import React from "react";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import Sidebar from "../../../components/Sidebar/Sidebar";
import TopBar from "../../../components/smallComps/TopBar";
import PageContent from "../../../components/Wrappers/PageContent";
import Form from "../../../components/Forms/Form";
import FormGroup from "../../../components/Forms/FormGroup";
import FormRowDual from "../../../components/Forms/FormRowDual";
import TextInput from "../../../components/Forms/TextInput";
import FormTitle from "../../../components/Forms/FormTitle";
import FormSubmitButton from "../../../components/Forms/FormSubmitButton";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";

const ComplaintInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  const resetForm = (e) => {
    e.preventDefault();
    alert("Form Reset");
  };

  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar
          image="https://avatars.githubusercontent.com/u/73744585?v=4"
          title="Complaints"
        />
        <ContentWrapper>
          <Form>
            <FormRowDual>
              <FormGroup>
                <TextInput
                  type="text"
                  label="Complaint ID"
                  required={true}
                  value={"#413656"}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  type="text"
                  label="Complained Date"
                  required={true}
                  value={"2023-07-28"}
                />
              </FormGroup>
            </FormRowDual>
            <FormRowDual>
              <FormGroup>
                <TextInput
                  type="text"
                  label="Customer Name"
                  required={true}
                  value={"Alice Smith"}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  type="text"
                  label="Customer ID"
                  required={true}
                  value={"#413656"}
                />
              </FormGroup>
            </FormRowDual>
            <FormRowDual>
              <FormGroup>
                <TextInput
                  type="text"
                  label="Tech Support Assigned"
                  required={true}
                  value={"Alice Smith"}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  type="text"
                  label="Status"
                  required={true}
                  value={"Pending"}
                />
              </FormGroup>
            </FormRowDual>
            <FormGroup>
              <TextInput
                type="text"
                label="Subject"
                required={true}
                value={
                  "Issue with Room Addition not Reflecting in Main Dashboard"
                }
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                type="text"
                label="Complaint"
                required={true}
                value={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            </FormGroup>
          </Form>
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default ComplaintInfo;
