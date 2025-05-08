import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      {/* Tab Screen - Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? "home" : "home-outline"} />
          ),
        }}
      ></Tabs.Screen>

      {/* Tab Screen - Conversation Messages */}
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "chatbubble" : "chatbubble-outline"}
            />
          ),
        }}
      ></Tabs.Screen>
      {/* Tab Screen - History */}
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? "time" : "time-outline"} />
          ),
        }}
      ></Tabs.Screen>

      {/* Tab Screen - User Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
