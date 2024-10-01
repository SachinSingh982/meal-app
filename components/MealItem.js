import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ meals }) => {
  const navigation = useNavigation();

  const handleOnMealDetail = () => {
    navigation.navigate("MealsDetail", {
      meal: meals,
    });
  };

  return (
    <Pressable
      onPress={handleOnMealDetail}
      style={({ pressed }) => [styles.mealItem, pressed && { opacity: 0.9 }]}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: meals.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {meals.title}
          </Text>
          <View style={styles.details}>
            <Text style={styles.detailText}>{meals.duration} min</Text>
            <Text style={styles.detailText}>
              {meals.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailText}>
              {meals.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 10,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 5,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  detailText: {
    fontSize: 14,
    color: "#666",
  },
});
