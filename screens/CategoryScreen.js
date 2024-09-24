import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { renderCategories } from "../lib/index";

const CategoryScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategories(itemData, navigation)}
      numColumns={2}
      key={"_"}
    />
  );
};

export default CategoryScreen;
