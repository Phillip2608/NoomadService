import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

import commonStyles from "../commonStyles";
export default function MenuTabBar({ state, descriptors, navigation }) {
  const isBlue = state.routes.map((route, index) => {
    const isFocused = state.index === index;

    return (route.name === "index" && isFocused) ||
      (route.name === "addService" && isFocused)
      ? { color: commonStyles.colors.brancoPrincipal }
      : route.name === "menuProfile" && isFocused
      ? { color: commonStyles.colors.pretoPrincipal }
      : {};
  });
  return (
    <View
      style={[
        styles.tabBar,
        state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (route.name === "index" && isFocused) ||
            (route.name === "addService" && isFocused)
            ? { backgroundColor: commonStyles.colors.azulPrincipal }
            : route.name === "menuProfile" && isFocused
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

          if (!isFocused && !event.defaultPrevent) {
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
            onLongPress={onLongPress}
            key={route.key}
            style={[
              { justifyContent: "center", alignItems: "center" },
              route.name === "index" || route.name === "menuProfile"
                ? { width: 50 }
                : { width: 100 },
            ]}
          >
            <View
              style={[
                isFocused
                  ? { backgroundColor: commonStyles.colors.rosaPrincipal }
                  : isBlue[0].color || isBlue[1].color !== undefined
                  ? { backgroundColor: commonStyles.colors.azulPrincipal }
                  : { backgroundColor: commonStyles.colors.brancoPrincipal },
                route.name === "index" || route.name === "menuProfile"
                  ? styles.smallBtn
                  : styles.largeBtn,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <FontAwesome
                name={
                  route.name === "index"
                    ? "home"
                    : route.name === "addService"
                    ? "plus"
                    : "user"
                }
                size={25}
                color={
                  isFocused
                    ? commonStyles.colors.brancoPrincipal
                    : isBlue[0].color || isBlue[1].color !== undefined
                    ? commonStyles.colors.brancoPrincipal
                    : commonStyles.colors.azulPrincipal
                }
              />
            </View>
            <Text style={[isBlue, styles.label]}>
              {label !== "addService" ? label : ""}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  smallBtn: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 25,
    position: "relative",
    bottom: 32,
  },
  largeBtn: {
    width: 65,
    height: 65,
    padding: 5,
    borderRadius: 35,
    position: "relative",
    bottom: 34,
  },
  label: {
    position: "relative",
    bottom: 30,
  },
});
