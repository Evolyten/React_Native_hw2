import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen.js";
import CreatePostsScreen from "./CreatePostsScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import { SimpleLineIcons, Feather, AntDesign } from "@expo/vector-icons";
import { IsLoginContext } from "../../App.js";
import { useContext } from "react";
const MainTab = createBottomTabNavigator();

function Home() {
  const setIsLogin = useContext(IsLoginContext);

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 82,
          paddingTop: 9,
        },
        tabBarItemStyle: {
          height: 40,
        },
        tabBarActiveTintColor: "#000",
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#BDBDBD",
        },
        headerTitleAlign: "center",
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: (focused, size, color) => (
            <SimpleLineIcons
              name="grid"
              size={20}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.icon_logout_wrap}
              onPress={() => setIsLogin(false)}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: (focused, size, color) => (
            <AntDesign name="plus" size={17} color="#fff" />
          ),
          tabBarItemStyle: {
            width: 70,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#FF6C00",
          },
        }}
        name="Create Post"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: (focused, size, color) => (
            <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}

export default Home;
const styles = StyleSheet.create({
  icon_logout_wrap: {
    marginRight: 16,
  },
});
