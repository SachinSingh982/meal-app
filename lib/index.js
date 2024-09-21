import CategoryGrid from "../components/CategoryGrid";

// Function to render Categories
export const renderCategories = (itemData) => {
  return (
    <CategoryGrid title={itemData.item.title} color={itemData.item.color} />
  );
};
