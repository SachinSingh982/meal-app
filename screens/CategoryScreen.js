import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { renderCategories } from "../lib/index";

const CategoryScreen = () => {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategories}
      />
    </>
  );
};

export default CategoryScreen;
