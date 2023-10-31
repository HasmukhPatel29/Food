import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Components/HomePage";
import ItemDetail from "./Components/ItemDetails";
import ItemImagePage from "./Components/ItemImagePage";
import MyCart from "./Components/Mycart";
import { store, persistor } from "./Components/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Entypo from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import FlashMessage from "react-native-flash-message";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimationPage from "./Components/Animation";
import { TransitionPresets } from '@react-navigation/stack';
import Menu from "./Components/Menu";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="ItemImagePage" component={ItemImagePage} />
    <Stack.Screen name="AnimationPage" component={AnimationPage} />
    <Stack.Screen name="ItemDetail" component={ItemDetail} />
    <Stack.Screen name="MyCart" component={MyCart} />
  </Stack.Navigator>
);

const App = () => {
  const isTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) || "";
    return !["MyCart", "ItemDetail"].includes(routeName);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <Tab.Navigator
             screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: "orange",
              ...TransitionPresets.SlideFromRightIOS,
              tabBarStyle: isTabBarVisible(route) ? { display: "flex" } : { display: "none" },
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => (
                  <Entypo name="home" color={color} size={focused ?  35 : size} />  
                ),
              })}
            />
            <Tab.Screen
              name="AnimationPage"
              component={AnimationPage}
              options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => (
                  <Entypo name="home" color={color} size={focused ?  35 : size} />  
                ),
              })}
            />
            <Tab.Screen
              name="My Cart"
              component={MyCart}
              options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => (
                  <AntIcon name="shoppingcart" color={color} size={focused ?  35 : size} />  
                ),
              })}
            />
            <Tab.Screen
              name="ItemDetail"
              component={ItemDetail}
              options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => (
                  <AntIcon name="profile" color={color} size={focused ?  35 : size} />  
                ),
              })}
            />
            <Tab.Screen
              name="Menu"
              component={Menu}
              options={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => (
                  <AntIcon name="copy1" color={color} size={focused ?  35 : size} />  
                )
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <FlashMessage position={"bottom"} />
      </PersistGate>
    </Provider>
  );
};

export default App;
