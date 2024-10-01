import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverView = ({ route, navigation }) => {
  const params = route.params;
  const categoryId = params.categoryId;

  // Filter the meals based on the categoryId
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId)
  );

  // Options to set the methods
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === categoryId);
    navigation.setOptions({
      title: catTitle.title,
    });
  }, [categoryId, navigation]);

  // Render function for each meal item
  const renderMeals = (meals) => {
    return <MealItem meals={meals.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
