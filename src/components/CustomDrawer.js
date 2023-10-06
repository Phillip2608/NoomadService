import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

//icones
import FontAwesome from "@expo/vector-icons/FontAwesome5";

//Estilos padrões
import commonStyles from "../commonStyles";

//Componentes adicionais
import MyDrawerItem from "./MyDrawerItem";

export default function CustomDrawerContent(props) {
  useEffect(() => {
    props.navigation.openDrawer();
  }, []);

  function toggleScreen(name, params = null) {
    props.navigation.jumpTo(name, params);
    props.navigation.closeDrawer();
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: commonStyles.colors.azulPrincipal,
        }}
      >
        <View style={styles.contentUser}>
          <View style={styles.userIcon}>
            <FontAwesome name="user" size={20} />
          </View>

          <Text style={styles.username}>Luiz Phillip</Text>
        </View>
        <MyDrawerItem
          title="Conversas"
          subtitle="Histórico de conversas"
          border={true}
          toggleScreen={() => toggleScreen("Conversations")}
        />
        <MyDrawerItem
          title="Meus Dados"
          subtitle="Visualizar dados pessoais"
          border={true}
          toggleScreen={() => toggleScreen("MyData")}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    backgroundColor: commonStyles.colors.azulPrincipal,
  },
  contentUser: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    color: commonStyles.colors.brancoPrincipal,
    fontSize: 20,
    marginLeft: 8,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: commonStyles.colors.amareloPrincipal,
    justifyContent: "center",
    alignItems: "center",
  },
});
