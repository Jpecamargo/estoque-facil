import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";

export default function Caregory() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Ionicons name="search" size={20} />
        <TextInput style={styles.searchInput} />
      </View>
    </View>
  );
}
