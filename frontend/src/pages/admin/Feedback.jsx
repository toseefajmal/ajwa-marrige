
import AdminModulePage from "./AdminModulePage";

const Feedback = () => {
  return (
    <AdminModulePage
      title="Customer Feedback"
      description="Manage customer reviews, ratings and event feedback."
      storageKey="ajwaFeedback"
      fields={[
        {
          name: "customerName",
          label: "Customer Name",
        },
        {
          name: "phone",
          label: "Phone Number",
        },
        {
          name: "rating",
          label: "Rating (1 to 5)",
          type: "number",
        },
        {
          name: "eventDate",
          label: "Event Date",
          type: "date",
        },
        {
          name: "feedback",
          label: "Customer Feedback",
        },
      ]}
    />
  );
};

export default Feedback;
