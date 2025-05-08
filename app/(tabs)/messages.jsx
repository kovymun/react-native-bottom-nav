import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";
import { messages } from "../../constants/messageContent";

const Messages = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={[globalStyles.screenTitle, { marginBottom: 25 }]}>
        Messages
      </Text>
      {messages.map(({ id, content }) => (
        <View
          key={id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f6f8f6", // soft light color
            borderRadius: 16,
            padding: 8,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 3,
            marginBottom: 16,
          }}
        >
          <Text style={{ flex: 1, marginLeft: 20, justifyContent: "center" }}>
            {content}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
