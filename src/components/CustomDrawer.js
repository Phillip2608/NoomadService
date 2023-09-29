import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

//icones
import FontAwesome from "@expo/vector-icons/FontAwesome5";

//Estilos padrões
import commonStyles from "../commonStyles";

//Componentes adicionais
import myDrawerItem from "./myDrawerItem";

export default function CustomDrawerContent(props) {
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
        {myDrawerItem({
          title: "Conversas",
          subtitle: "Histórico de conversas",
          border: true,
        })}
        {myDrawerItem({
          title: "Serviços",
          subtitle: "Visualizar novos serviços e agendamentos",
          border: true,
        })}
        {myDrawerItem({
          title: "Notificações",
          subtitle: "Visualizar novas notificações",
          border: true,
        })}
        {myDrawerItem({
          title: "Pagamentos",
          subtitle: "Formas de pagamento",
          border: true,
        })}
        {myDrawerItem({
          title: "Endereço",
          subtitle: "Visualizar ou alterar meu endereço",
          border: true,
        })}
        {myDrawerItem({
          title: "Assinatura Premium",
          subtitle: "Seja um membro premium na Noomad",
          border: true,
        })}
        {myDrawerItem({
          title: "Meus Dados",
          subtitle: "Visualizar ou alterar meus dados pessoais",
          border: false,
        })}
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
