import { forwardRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

export const MenuItemProfile = forwardRef(
  ({ title, subtitle, iconName, ...rest }, ref) => {
    return (
      <TouchableOpacity ref={ref} {...rest} style={styles.btnContainer}>
        <FontAwesome name={iconName} size={25} />
        <View>
          <Text>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
        <FontAwesome name="home" size={25} />
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
