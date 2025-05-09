import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { completedTasks } from "../../constants/completedTasks";

const History = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>History</Text>
      <Text style={globalStyles.description}>
        Below is a detailed overview of your most recently completed tasks.
      </Text>

      {/* Card Element */}
      {completedTasks.map(
        ({ id, action, handler, completedDate, cost, rating, location }) => (
          <View style={[globalStyles.card, { padding: 15 }]} key={id}>
            {/* <Image style={styles.image} source={Tutoring} /> */}
            <View style={globalStyles.textContainer}>
              <Text style={styles.title}>REF: {id}</Text>
              <Text
                style={styles.historyContent}
              >{`\u2022 Handler: ${handler}`}</Text>
              <Text
                style={styles.historyContent}
              >{`\u2022 Task: ${action}`}</Text>
              <Text style={styles.historyContent}>
                {`\u2022 Completed: ${completedDate}`}
              </Text>
              <Text
                style={styles.historyContent}
              >{`\u2022 Charge: ${cost}`}</Text>
              <Text
                style={styles.historyContent}
              >{`\u2022 Rating: ${rating}`}</Text>
              <Text
                style={styles.historyContent}
              >{`\u2022 Location: ${location}`}</Text>
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#002d1d",
  },

  historyContent: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
});
