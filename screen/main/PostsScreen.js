import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user_data}>
        <Image
          style={styles.user_img}
          source={require("../../assets/images/User.jpg")}
        />
        <View style={styles.user_info}>
          <Text style={styles.user_name}>Natali Romanova</Text>
          <Text style={styles.user_email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  user_img: {
    width: 60,
    height: 60,
  },
  user_data: {
    flexDirection: "row",
    alignItems: "center",
  },
  user_info: {
    marginLeft: 8,
  },
  user_name: {
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
    fontFamily: "Roboto-Bold",
  },
  user_email: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
    fontFamily: "Roboto-Regular",
  },
});

export default PostsScreen;
