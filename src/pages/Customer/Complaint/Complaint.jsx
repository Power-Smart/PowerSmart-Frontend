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

const Complaint = () => {
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
          <Form>
            <FormGroup>
              <TextInput type="text" label="Name" required={true} />
            </FormGroup>
            <FormRowDual>
              <FormGroup>
                <TextInput type="text" label="Width 1 (feet)" required={true} />
              </FormGroup>
              <FormGroup>
                <TextInput type="text" label="Width 2 (feet)" required={true} />
              </FormGroup>
            </FormRowDual>
            <FormRowDual>
              <FormGroup>
                <TextInput type="text" label="Height (feet)" required={true} />
              </FormGroup>
            </FormRowDual>
            <FormGroup>
              <TextInput type="text" label="Room Type" required={true} />
            </FormGroup>
            <FormGroup>
              <TextInput type="text" label="Sample Input" required={true} />
            </FormGroup>
            <div className="button-section w-2/3 text-center p-2 m-auto flex space-x-20 align-middle mt-8">
              <FormSubmitButton
                backgroundColor={"#0856CD"}
                urlLink={"register"}
                buttonText={"Add"}
                onClick={handleAddComplaint}
              />
              <FormSubmitButton
                backgroundColor={"#CE4444"}
                urlLink={"register"}
                buttonText={"Clear"}
                onClick={clearForm}
              />
            </div>
          </Form>
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default Complaint;
