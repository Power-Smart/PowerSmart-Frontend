import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Spin } from "antd";
import PageWrapper from "../../../components/Wrappers/PageWrapper";
import AdmninSidebar from "../../../components/Sidebar/Admin/AdminSidebar";
import PageContent from "../../../components/Wrappers/PageContent";
import TopBar from "../../../components/smallComps/TopBar";
import ContentWrapper from "../../../components/Wrappers/ContentWrapper";
import { getPaymentInfoApi } from "../../../api/apiAdmin";

const PaymentInfo = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPaymentInfoApi(paymentId);
        setPayment(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payment data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [paymentId]);

  return (
    <PageWrapper>
      <AdmninSidebar />
      <PageContent>
        <TopBar title="Payments" />
        <ContentWrapper>
          {loading ? (
            <Spin size="large" />
          ) : payment ? (
            <Descriptions
              title={<span style={{ color: "white" }}>Payment Information</span>}
              bordered
              column={1}
            >
              <Descriptions.Item label="Payment ID" style={{ color: "white" }}>
                {payment.payment_id}
              </Descriptions.Item>
              <Descriptions.Item label="Amount" style={{ color: "white" }}>
                {payment.amount}
              </Descriptions.Item>
              <Descriptions.Item label="Type" style={{ color: "white" }}>
                {payment.type}
              </Descriptions.Item>
              <Descriptions.Item label="User ID" style={{ color: "white" }}>
                {payment.user_id}
              </Descriptions.Item>
              <Descriptions.Item label="PayHere ID" style={{ color: "white" }}>
                {payment.payhere_id}
              </Descriptions.Item>
              <Descriptions.Item label="Method" style={{ color: "white" }}>
                {payment.method}
              </Descriptions.Item>
              <Descriptions.Item label="Status" style={{ color: "white" }}>
                {payment.status}
              </Descriptions.Item>
              <Descriptions.Item label="Currency" style={{ color: "white" }}>
                {payment.currency}
              </Descriptions.Item>
              <Descriptions.Item label="Created At" style={{ color: "white" }}>
                {new Date(payment.createdAt)
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " ")}
              </Descriptions.Item>
              <Descriptions.Item label="Updated At" style={{ color: "white" }}>
                {new Date(payment.updatedAt)
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " ")}
              </Descriptions.Item>
            </Descriptions>
          ) : (
            <div style={{ color: "white" }}>Error loading payment data.</div>
          )}
        </ContentWrapper>
      </PageContent>
    </PageWrapper>
  );
};

export default PaymentInfo;
