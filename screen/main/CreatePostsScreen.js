import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image_add_wrap}>
        <View style={styles.image_wrap}>
          <TouchableOpacity activeOpacity={0.6} style={styles.add_photo}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.image_load_title}>Загрузите фото</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input_wrap}>
          <TextInput
            style={styles.input}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
          />
        </View>
        <View>
          <TextInput
            style={styles.input_location}
            placeholder="Местность..."
            placeholderTextColor="#BDBDBD"
          />
          <SimpleLineIcons
            style={styles.local_icon}
            name="location-pin"
            size={24}
            color="#BDBDBD"
          />
        </View>
        <TouchableOpacity style={styles.submit_btn}>
          <Text style={styles.submit_btn_title}>Опубликовать</Text>
        </TouchableOpacity>
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
    backgroundColor: "#FFFFFF",
  },
  image_wrap: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  photo_wrap: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  add_photo: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image_load_title: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  image_add_wrap: {
    marginBottom: 32,
  },
  input_wrap: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  input_location: {
    position: "relative",
    paddingLeft: 28,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },

  form: {},
  submit_btn: {
    marginTop: 32,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  submit_btn_title: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
    fontFamily: "Roboto-Regular",
  },
  local_icon: {
    position: "absolute",
    left: 0,
    top: 13,
    width: 24,
    height: 24,
  },
});

export default CreatePostsScreen;
