import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();

  const padding = width > 450 ? 12 : 24;
  const margin = width > 450 ? 12 : 24;

  return (
    <View style={[styles.container, { padding, margin }]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    /* padding: deviceWidth > 450 ? 12 : 24,
    margin: deviceWidth > 450 ? 12 : 24, */
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
