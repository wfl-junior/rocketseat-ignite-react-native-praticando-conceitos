import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Fragment, useCallback, useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    color: "white",
    fontFamily: "Inter_700Bold",
  },
});

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Inter_400Regular,
          Inter_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </Fragment>
  );
};

export default App;
