import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

import commonStyles from "../commonStyles";

export default function MyDrawerItem(props) {
  return (
    <TouchableOpacity
      style={[
        styles.contentItemDrawer,
        props.border === true ? styles.itemBorder : {},
      ]}
      onPress={() => props.toggleScreen()}
    >
      <View style={styles.contentItem}>
        <View style={styles.contentTextItem}>
          <Text style={styles.titleItem}>{props.title}</Text>
          <Text style={styles.subtitleItem}>{props.subtitle}</Text>
        </View>
        <FontAwesome name="chevron-right" style={styles.icon} size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentItemDrawer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  contentItem: {
    marginLeft: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  contentTextItem: {
    marginBottom: 10,
  },
  titleItem: {
    fontSize: 20,
    color: commonStyles.colors.brancoPrincipal,
    fontFamily: commonStyles.fonts.WorkSans_Regular,
  },
  subtitleItem: {
    fontSize: 12,
    color: commonStyles.colors.brancoPrincipal,
    fontFamily: commonStyles.fonts.WorkSans_Light,
  },
  icon: {
    marginLeft: 20,
    color: commonStyles.colors.pretoPrincipal,
    opacity: 0.4,
  },
  itemBorder: {
    borderBottomWidth: 0.7,
    borderBottomColor: commonStyles.colors.pretoPrincipal,
  },
});
