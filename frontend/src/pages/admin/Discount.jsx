
import AdminModulePage from "./AdminModulePage";

const Discounts = () => {
  return (
    <AdminModulePage
      title="Discount Management"
      description="Create and manage seasonal discounts and promotional offers."
      storageKey="ajwaDiscounts"
      fields={[
        {
          name: "discountName",
          label: "Discount Name",
        },
        {
          name: "discountCode",
          label: "Promo Code",
        },
        {
          name: "discountPercent",
          label: "Discount Percentage (%)",
          type: "number",
        },
        {
          name: "startDate",
          label: "Start Date",
          type: "date",
        },
        {
          name: "endDate",
          label: "End Date",
          type: "date",
        },
        {
          name: "description",
          label: "Description",
          required: false,
        },
      ]}
    />
  );
};

export default Discounts;
