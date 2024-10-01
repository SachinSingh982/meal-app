import React from "react";
import CategoryScreen from "./screens/CategoryScreen";
import { StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import MealsDetail from "./screens/MealsDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CategoryScreen"
          screenOptions={{
            headerBackTitleVisible: false,
            title: "All Categories",
            headerStyle: {
              backgroundColor: "whitesmoke",
              // headerTintColor: "red",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            // options={{
            //   title: "All Categories",
            //   headerStyle: {
            //     backgroundColor: "whitesmoke",
            // headerTintColor: "red",
            //   },
            // }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverView}

            //-------------------------------------- This is one of the apporach we can use while working on the dynamic category the second approach is inside the mealsOverview screen------------------------------------.

            // options={({ route, navigation }) => {
            //   const id = route.params.categoryId;
            //   const title = route.params.categoryTitle;
            //   return {
            //     title: title,
            //   };
            // }}
          />

          <Stack.Screen
            name="MealsDetail"
            component={MealsDetail}

            // This is one way of adding heading and title on  a specific page if you dont have any direct  access to the page.
            // options={{
            //   headerRight: () => {
            //     return <Button title="Add me" onPress={} />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
