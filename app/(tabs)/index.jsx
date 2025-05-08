import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { taskCategories } from "../../constants/taskCategories";
import { globalStyles } from "../../styles/globalStyles";

const Home = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Help Mate</Text>
      <Text style={styles.description}>
        Need a hand? Help Mate connects you with trusted local freelancers for
        everyday tasks like moving furniture, fixing leaks, cleaning homes, or
        tutoring your kids. Find reliable help nearby fast, affordable, and
        hassle-free
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          paddingHorizontal: 8,
          marginBottom: 12,
        }}
      >
        Popular Projects
      </Text>

      {/* Card Element */}
      {taskCategories.map(({ id, title, cost, image }) => (
        <View style={styles.card} key={id}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cost}>{cost}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    paddingHorizontal: 8,
    marginVertical: 24,
  },
  card: {
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#002d1d",
  },
  cost: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
});
