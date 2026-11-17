
import AdminModulePage from "./AdminModulePage";

const Staff = () => {
  return (
    <AdminModulePage
      title="Staff Management"
      description="Add, manage and monitor your marriage hall employees."
      storageKey="ajwaStaff"
      fields={[
        {
          name: "name",
          label: "Employee Name",
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
        },
        {
          name: "phone",
          label: "Phone Number",
        },
        {
          name: "role",
          label: "Job Role",
        },
        {
          name: "salary",
          label: "Monthly Salary (Rs.)",
          type: "number",
        },
        {
          name: "joiningDate",
          label: "Joining Date",
          type: "date",
        },
      ]}
    />
  );
};

export default Staff;
