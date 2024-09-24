import CategoryGrid from "../components/CategoryGrid";

// Function to render Categories
export const renderCategories = (itemData, navigation) => {
  const onPressHandler = () => {
    navigation.navigate("MealsOverview", {
      categoryId: itemData.item.id,
      categoryTitle: itemData.item.title,
    });
  };

  return (
    <CategoryGrid
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={onPressHandler}
    />
  );
};
