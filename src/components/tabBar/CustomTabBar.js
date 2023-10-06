import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome5";
import commonStyles from "../../commonStyles";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const isBlue = state.routes.map((route, index) => {
    const isFocused = state.index === index;
    return (route.name === "Home" && isFocused) ||
      (route.name === "AddService" && isFocused)
      ? { color: commonStyles.colors.brancoPrincipal }
      : route.name === "Menu" && isFocused
      ? { color: commonStyles.colors.pretoPrincipal }
      : {};
  });

  const btnFocus = {
    backgroundColor: commonStyles.colors.rosaPrincipal,
    color: commonStyles.colors.brancoPrincipal,
  };

  const btnNotFocus = {
    backgroundColor: commonStyles.colors.azulPrincipal,
    color: commonStyles.colors.brancoPrincipal,
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "100%",
          height: 75,
          justifyContent: "center",
        },
        state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (route.name === "Home" && isFocused) ||
            (route.name === "AddService" && isFocused)
            ? { backgroundColor: commonStyles.colors.azulPrincipal }
            : route.name === "Menu" && isFocused
            ? { backgroundColor: commonStyles.colors.brancoPrincipal }
            : {};
        }),
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            key={route.key}
            onLongPress={onLongPress}
            style={[
              { alignItems: "center", justifyContent: "center" },
              route.name === "Home" && { width: 50 },
              route.name === "Menu" && { width: 50 },
              route.name === "AddService" && { width: 100 },
            ]}
          >
            <View
              style={[
                isFocused
                  ? { backgroundColor: btnFocus.backgroundColor }
                  : isBlue[0].color || isBlue[1].color !== undefined
                  ? { backgroundColor: commonStyles.colors.azulPrincipal }
                  : { backgroundColor: commonStyles.colors.brancoPrincipal },
                route.name === "Home" || route.name === "Menu"
                  ? styles.smallBtn
                  : styles.largeBtn,
              ]}
            >
              <FontAwesome
                name={
                  route.name === "Home"
                    ? "home"
                    : route.name === "AddService"
                    ? "plus"
                    : "user"
                }
                size={25}
                color={
                  isFocused
                    ? btnFocus.color
                    : isBlue[0].color || isBlue[1].color !== undefined
                    ? btnNotFocus.color
                    : commonStyles.colors.azulPrincipal
                }
              />
            </View>

            <Text style={[isBlue, styles.label]}>
              {label !== "AddService" ? label : ""}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  smallBtn: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 32,
  },
  largeBtn: {
    width: 65,
    height: 65,
    padding: 5,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 34,
  },
  label: {
    position: "relative",
    bottom: 20,
  },
});
