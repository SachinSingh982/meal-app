import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import IcontButton from "../components/IcontButton";

const MealsDetail = ({ route, navigation }) => {
  const meal = route.params.meal;

  const handleOnAddme = () => {
    console.log("Working");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IcontButton onPress={handleOnAddme} />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.detailText}>Duration: {meal.duration} min</Text>
        </View>

        <View>
          <Text style={styles.detailText}>
            Affordability: {meal.affordability}
          </Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {meal.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredientText}>
          - {ingredient}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Steps</Text>
      {meal.steps.map((step, index) => (
        <Text key={index} style={styles.stepText}>
          {index + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
};

export default MealsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  ingredientText: {
    fontSize: 16,
    color: "#444",
  },
  stepText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },
});
