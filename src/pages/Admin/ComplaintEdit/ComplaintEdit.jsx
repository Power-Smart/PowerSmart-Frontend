import React from "react";
import { Modal, Input, Switch } from "antd";

const ComplaintEdit = ({
  visible,
  onCancel,
  onOk,
  editedComplaint,
  setEditedComplaint,
}) => {
  return (
    <Modal
      title="Edit Complaint Information"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{ style: { background: '#1890ff', borderColor: '#1890ff' } }} // Set Ok button style here
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Assigned Tech Support ID
        </label>
        <Input
          value={editedComplaint.assign_tech_support_id}
          onChange={(e) =>
            setEditedComplaint({
              ...editedComplaint,
              assign_tech_support_id: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Is Solved
        </label>
        <Switch
          checked={editedComplaint.is_solve}
          onChange={(checked) =>
            setEditedComplaint({ ...editedComplaint, is_solve: checked })
          }
        />
      </div>
    </Modal>
  );
};

export default ComplaintEdit;
