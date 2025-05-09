import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { messages } from "../../constants/messageContent";

// Messages component displaying a list of direct messages exchanged between the task handler and requester.
const Messages = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={[globalStyles.screenTitle, { marginBottom: 25 }]}>
        Messages
      </Text>

      {/* Card Element - Message History */}
      {messages.map(({ id, handler, content }) => (
        <View key={id} style={[globalStyles.card, { padding: 15 }]}>
          {/* Handler Circle */}
          <View style={styles.handlerCircle}>
            <Text style={styles.handlerText}>{handler}</Text>
          </View>

          {/* Message Content */}
          <View style={globalStyles.textContainer}>
            <Text style={globalStyles.screenContent}>{content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  handlerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#b2dfdb",
    justifyContent: "center",
    alignItems: "center",

    handlerText: {
      color: "#004d40",
      fontWeight: "bold",
      fontSize: 18,
      padding: 4,
    },
  },
});
