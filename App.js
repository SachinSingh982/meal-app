import React from "react";
import CategoryScreen from "./screens/CategoryScreen";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
          }}
          initialRouteName="CategoryScreen"
        >
          <Stack.Screen name="MealsCategories" component={CategoryScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
