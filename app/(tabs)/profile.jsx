import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

// Profile component to display user profile information
const Profile = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={[globalStyles.screenTitle, { marginBottom: 25 }]}>
        Profile
      </Text>

      <View
        style={[
          globalStyles.card,
          {
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 15,
          },
        ]}
      >
        <Text style={styles.profileText}>
          <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>Name: </Text>
          Anathi Jacobs
        </Text>
        <Text style={styles.profileText}>
          <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>Joined: </Text>
          14 March 2023
        </Text>
        <Text style={styles.profileText}>
          <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>
            Location:{" "}
          </Text>
          Bloemfontein, Free State, South Africa
        </Text>
      </View>

      {/* Buttons for profile edit and logout functionality - These are placeholders and don't have functionality yet */}
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" color="#009688" onPress={() => {}} />
        <Button title="Logout" color="#FF5722" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 5,
  },

  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});
