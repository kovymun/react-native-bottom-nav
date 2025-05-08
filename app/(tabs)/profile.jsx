import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";
// import ProfilePic from "../../assets/pp.jpg";

const Profile = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.screenTitle}>Profile</Text>
      {/* <Image
        style={{
          height: 100,
          weight: 100,
          objectFit: "cover",
          borderRadius: 10,
          borderWidth: 3,
          marginVertical: 10,
        }}
       
        source={ProfilePic}
      /> */}
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.location}>Cape Town, South Africa</Text>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => {}} />
        <Button title="Logout" color="red" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    gap: 10,
  },
});
