
import AdminModulePage from "./AdminModulePage";

const Expenses = () => {
  return (
    <AdminModulePage
      title="Expenses Management"
      description="Track and manage all marriage hall business expenses."
      storageKey="ajwaExpenses"
      fields={[
        {
          name: "expenseTitle",
          label: "Expense Title",
        },
        {
          name: "category",
          label: "Expense Category",
        },
        {
          name: "amount",
          label: "Amount (Rs.)",
          type: "number",
        },
        {
          name: "expenseDate",
          label: "Expense Date",
          type: "date",
        },
        {
          name: "paymentMethod",
          label: "Payment Method",
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

export default Expenses;
