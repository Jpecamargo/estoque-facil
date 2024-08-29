import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Button, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            headerShown: true,
            title: "Alerta de estoque",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="category"
          options={{
            drawerLabel: "Categroias",
            title: "Cadastro de categorias",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="clipboard" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="product"
          options={{
            drawerLabel: "Produtos",
            title: "Cadastro de produtos",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cube" color={color} size={size} />
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons
                  name="add"
                  size={24}
                  color="#007aff"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
