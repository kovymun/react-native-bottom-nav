import { StyleSheet, Text, View, Image } from "react-native";
import { taskCategories } from "../../constants/taskCategories";
import { globalStyles } from "../../styles/globalStyles";

// Home component displaying the introduction to the Help Mate app and popular tasks/projects offered
const Home = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Help Mate</Text>
      <Text style={globalStyles.description}>
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

      {/* Card Element - Projects/tasks offered */}
      {taskCategories.map(({ id, title, cost, image }) => (
        <View style={globalStyles.card} key={id}>
          <Image style={styles.image} source={image} />
          <View style={globalStyles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={globalStyles.screenContent}>{cost}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Home;

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
});
