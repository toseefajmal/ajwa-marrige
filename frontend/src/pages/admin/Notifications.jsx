
import AdminModulePage from "./AdminModulePage";

const Notifications = () => {
  return (
    <AdminModulePage
      title="Notifications Management"
      description="Create and manage booking, payment and general notifications."
      storageKey="ajwaNotifications"
      fields={[
        {
          name: "title",
          label: "Notification Title",
        },
        {
          name: "type",
          label: "Notification Type",
        },
        {
          name: "message",
          label: "Notification Message",
        },
        {
          name: "date",
          label: "Notification Date",
          type: "date",
        },
        {
          name: "status",
          label: "Notification Status",
        },
      ]}
    />
  );
};

export default Notifications;
