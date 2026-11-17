
import AdminModulePage from "./AdminModulePage";

const Invoices = () => {
  return (
    <AdminModulePage
      title="Invoice Generation"
      description="Manage customer invoices, booking charges and payment records."
      storageKey="ajwaInvoices"
      fields={[
        {
          name: "invoiceNumber",
          label: "Invoice Number",
        },
        {
          name: "customerName",
          label: "Customer Name",
        },
        {
          name: "bookingId",
          label: "Booking ID",
        },
        {
          name: "totalAmount",
          label: "Total Amount (Rs.)",
          type: "number",
        },
        {
          name: "paidAmount",
          label: "Paid Amount (Rs.)",
          type: "number",
        },
        {
          name: "invoiceDate",
          label: "Invoice Date",
          type: "date",
        },
      ]}
    />
  );
};

export default Invoices;
