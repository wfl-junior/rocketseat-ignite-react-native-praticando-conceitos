import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Fragment, useCallback, useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Home } from "~/screens/Home";
import { theme } from "~/styles/theme";

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

  const handleLayoutRootView = useCallback(async () => {
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

      <ThemeProvider theme={theme}>
        <View onLayout={handleLayoutRootView} style={{ flex: 1 }}>
          <Home />
        </View>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
