import { Fragment } from "react";
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
    fontWeight: "700",
    color: "white",
  },
});

const App: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  </Fragment>
);

export default App;
