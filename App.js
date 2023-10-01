import "react-native-gesture-handler";
import { useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//sistema de navegação
import Navigator from "./src/Navigator";

export default function App() {
  const [loadedFonts] = useFonts({
    Dela_Regular: require("./assets/fonts/DelaGothicOne-Regular.ttf"),
    WorkSans_Light: require("./assets/fonts/WorkSans-Light.ttf"),
    WorkSans_Regular: require("./assets/fonts/WorkSans-Regular.ttf"),
    WorkSans_Bold: require("./assets/fonts/WorkSans-Bold.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const onLayout = useCallback(() => {
    if (loadedFonts) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts]);

  if (!loadedFonts) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
