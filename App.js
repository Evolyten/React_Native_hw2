import { useState, createContext } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import loadApplication from "./fonts/fonts.js";
import Route from "./route/route.js";
export const IsLoginContext = createContext();
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <IsLoginContext.Provider value={setIsLogin}>
      <NavigationContainer>
        <Route isAuth={isLogin} />
      </NavigationContainer>
    </IsLoginContext.Provider>
  );
}
