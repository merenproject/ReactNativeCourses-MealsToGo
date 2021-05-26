import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

import { MapScreen } from "../../features/map/screens/map.screen";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationsContextProvider } from "../../services/location/locations.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};
///////////////////////////////////////// 145.
const tabBarIcon =
  // parametre


    (iconName) =>
    ({ size, color }) => {
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    };
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),

    // Alternatif (const tabBarIcon kullanmadan)
    // tabBarIcon: ({size, color}) => (
    //   <Ionicons name={iconName} size={size} color={color} />
    // ),
  };
};

////////////////////////////////////////// 145.
export const AppNavigator = () => (
  //Mount unmount olması için navigatore aldık (account screenden ayırmak için) eskiden app.js deydi.//
  //Böylece unmount ederek asnc storagei sıfırlamış olduk yeni user için varolan favoritelere ekleme yapmadı//
  <FavouritesContextProvider>
    <LocationsContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationsContextProvider>
  </FavouritesContextProvider>
);
