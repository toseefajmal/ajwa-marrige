
import AdminModulePage from "./AdminModulePage";

const Services = () => {
  return (
    <AdminModulePage
      title="Services Management"
      description="Add and manage wedding event services and their prices."
      storageKey="ajwaServices"
      fields={[
        {
          name: "serviceName",
          label: "Service Name",
        },
        {
          name: "category",
          label: "Service Category",
        },
        {
          name: "price",
          label: "Service Price (Rs.)",
          type: "number",
        },
        {
          name: "provider",
          label: "Service Provider",
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

export default Services;
