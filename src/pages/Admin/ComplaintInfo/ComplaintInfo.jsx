import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Spin, Button } from "antd";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import { getComplaintInfoApi, updateComplaintApi } from "../../../api/apiAdmin";
import ComplaintEdit from "../ComplaintEdit/ComplaintEdit";

const ComplaintInfo = () => {
  const { complaintId } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedComplaint, setEditedComplaint] = useState({
    assign_tech_support_id: "",
    is_solve: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getComplaintInfoApi(complaintId);
        setComplaint(data);
        setEditedComplaint({
          assign_tech_support_id: data.assign_tech_support_id,
          is_solve: data.is_solve,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching complaint data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [complaintId]);

  const handleModalOk = async () => {
    try {
      await updateComplaintApi(complaintId, editedComplaint);
      // Close the modal and refresh the complaint data
      setIsModalVisible(false);
      fetchData();
    } catch (error) {
      console.error("Error updating complaint data: ", error);
    }
  };

  const handleModalCancel = () => {
    // Close the modal without saving changes
    setIsModalVisible(false);
  };

  const openModal = () => {
    // Open the modal for editing
    setIsModalVisible(true);
  };

  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar title="Complaints" />
        <ContentWrapper>
          {loading ? (
            <Spin size="large" />
          ) : complaint ? (
            <Descriptions
              title={
                <span style={{ color: "white" }}>Complaint Information</span>
              }
              bordered
              column={1}
            >
              <Descriptions.Item
                label="Complaint ID"
                style={{ color: "white" }}
              >
                {complaint.complaint_id}
              </Descriptions.Item>
              <Descriptions.Item label="Customer ID" style={{ color: "white" }}>
                {complaint.customer_id}
              </Descriptions.Item>
              <Descriptions.Item
                label="Assigned Tech Support ID"
                style={{ color: "white" }}
              >
                {complaint.assign_tech_support_id}
              </Descriptions.Item>
              <Descriptions.Item label="Description" style={{ color: "white" }}>
                {complaint.description}
              </Descriptions.Item>
              <Descriptions.Item label="Date" style={{ color: "white" }}>
                {new Date(complaint.date)
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " ")}
              </Descriptions.Item>
              <Descriptions.Item
                label="Last Updated"
                style={{ color: "white" }}
              >
                {new Date(complaint.updatedAt)
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " ")}
              </Descriptions.Item>
              <Descriptions.Item label="Is Solved" style={{ color: "white" }}>
                {complaint.is_solve ? "Yes" : "No"}
              </Descriptions.Item>
              <Descriptions.Item label="Comment" style={{ color: "white" }}>
                {complaint.comment}
              </Descriptions.Item>
              <Descriptions.Item label="Action" style={{ color: "white" }}>
                <button
                  className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700"
                  onClick={openModal}
                >
                  Update
                </button>
              </Descriptions.Item>
            </Descriptions>
          ) : (
            <div style={{ color: "white" }}>Error loading complaint data.</div>
          )}
        </ContentWrapper>
      </PageContent>
      <ComplaintEdit
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        editedComplaint={editedComplaint}
        setEditedComplaint={setEditedComplaint}
      />
    </PageWrapper>
  );
};

export default ComplaintInfo;
