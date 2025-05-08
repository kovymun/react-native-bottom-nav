import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { taskCategories } from "../../constants/taskCategories";

const Home = () => {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          paddingVertical: 15,
        }}
      >
        Welcome to Help Mate
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          padding: 15,
        }}
      >
        Need a hand? Help Mate connects you with trusted local freelancers for
        everyday tasks like moving furniture, fixing leaks, cleaning homes, or
        tutoring your kids. Find reliable help nearby fast, affordable, and
        hassle-free
      </Text>

      {/* I only want this section to scroll */}
      <ScrollView>
        <View>
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
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f6f8f6", // soft light color
    borderRadius: 16,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android shadow
    marginBottom: 16,
    alignItems: "center",
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
