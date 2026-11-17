
import AdminModulePage from "./AdminModulePage";

const Calendar = () => {
  return (
    <AdminModulePage
      title="Booking Calendar"
      description="Manage wedding event dates, hall schedules and booking details."
      storageKey="ajwaCalendar"
      fields={[
        {
          name: "eventName",
          label: "Event Name",
        },
        {
          name: "customerName",
          label: "Customer Name",
        },
        {
          name: "phone",
          label: "Customer Phone",
        },
        {
          name: "hallName",
          label: "Hall Name",
        },
        {
          name: "eventDate",
          label: "Event Date",
          type: "date",
        },
        {
          name: "eventTime",
          label: "Event Time",
          type: "time",
        },
      ]}
    />
  );
};

export default Calendar;
