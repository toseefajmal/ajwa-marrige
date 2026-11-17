
import AdminModulePage from "./AdminModulePage";

const Menu = () => {
  return (
    <AdminModulePage
      title="Food & Menu Management"
      description="Manage wedding menus, food categories, dishes and per-head prices."
      storageKey="ajwaMenu"
      fields={[
        {
          name: "menuName",
          label: "Menu Name",
        },
        {
          name: "category",
          label: "Food Category",
        },
        {
          name: "dishes",
          label: "Dishes",
        },
        {
          name: "pricePerHead",
          label: "Price Per Head (Rs.)",
          type: "number",
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

export default Menu;
