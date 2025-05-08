import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          borderWidth: 2,
          elevation: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }}></Tabs.Screen>
      <Tabs.Screen
        name="messages"
        options={{ title: "Messages" }}
      ></Tabs.Screen>
      <Tabs.Screen name="history" options={{ title: "History" }}></Tabs.Screen>
      <Tabs.Screen name="profile" options={{ title: "Profile" }}></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
